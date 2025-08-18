import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Security headers para todas as rotas
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Disable caching of HTML to prevent source viewing
  if (request.nextUrl.pathname === '/') {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
  }

  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    `
      default-src 'self' 'unsafe-inline' 'unsafe-eval';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.emailjs.com https://assets.calendly.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: blob: https:;
      connect-src 'self' https://api.emailjs.com https://calendly.com;
      frame-src 'self' https://calendly.com;
    `.replace(/\s{2,}/g, ' ').trim()
  )

  // Se for a rota /linktree, adicionar headers específicos
  if (request.nextUrl.pathname.startsWith('/linktree')) {
    // Cache otimizado para LinkTree
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400')
  }

  // Block common scraping user agents
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  const blockedAgents = [
    'wget', 'curl', 'scrapy', 'spider', 'bot', 'crawler',
    'headless', 'phantom', 'selenium'
  ]
  
  const isBlocked = blockedAgents.some(agent => userAgent.includes(agent))
  
  if (isBlocked && !userAgent.includes('google') && !userAgent.includes('bing')) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}
