import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DAHOR - LinkTree | Estratégia Digital',
  description: 'Todos os links da DAHOR em um só lugar. Estratégia digital, marketing e desenvolvimento web.',
  keywords: 'DAHOR, linktree, estratégia digital, marketing, desenvolvimento web, Campo Bom',
  authors: [{ name: 'DAHOR' }],
  creator: 'DAHOR',
  publisher: 'DAHOR',
  robots: {
    index: false, // Não indexar no Google para manter exclusivo do Instagram
    follow: false,
  },
  openGraph: {
    title: 'DAHOR - Estratégia Digital',
    description: 'Pensamos cada jogada com precisão estratégica',
    url: 'https://dahor.com.br/linktree',
    siteName: 'DAHOR',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'DAHOR - Estratégia Digital',
    description: 'Pensamos cada jogada com precisão estratégica',
  },
}

export default function LinkTreeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
