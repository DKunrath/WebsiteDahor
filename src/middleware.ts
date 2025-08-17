import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Se for a rota /linktree, adicionar headers específicos
  if (request.nextUrl.pathname.startsWith('/linktree')) {
    const response = NextResponse.next()
    
    // Headers para otimização mobile
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'SAMEORIGIN')
    response.headers.set('X-XSS-Protection', '1; mode=block')
    
    // Cache otimizado para LinkTree
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400')
    
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/linktree/:path*']
}
