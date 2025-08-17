import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'DAHOR - Estratégia Digital & Desenvolvimento',
  description: 'No xadrez do marketing digital, cada movimento conta. Desenvolvemos estratégias vencedoras que posicionam sua marca sempre um passo à frente da concorrência.',
  keywords: 'marketing digital, desenvolvimento web, aplicativos, estratégia digital, branding, SEO, tráfego pago',
  authors: [{ name: 'DAHOR' }],
  robots: 'index, follow',
  icons: {
    icon: '/logo/dahor_fav_icon.png',
    shortcut: '/logo/dahor_fav_icon.png',
    apple: '/logo/dahor_fav_icon.png',
  },
  openGraph: {
    title: 'DAHOR - Estratégia Digital & Desenvolvimento',
    description: 'Cada movimento uma vitória. Estratégias digitais que conquistam o mercado.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
