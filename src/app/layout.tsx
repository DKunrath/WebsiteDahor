import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import SourceProtection from '@/components/SourceProtection'
import AntiDebugger from '@/components/AntiDebugger'

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
      <head>
        {/* Meta Pixel Code - Pixel 1 */}
        <Script
          id="meta-pixel-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2567778633590187');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2567778633590187&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Meta Pixel Code - Pixel 2 */}
        <Script
          id="meta-pixel-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '848288687699535');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=848288687699535&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <AntiDebugger />
        <SourceProtection />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
