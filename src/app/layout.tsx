import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kevin David Chavarro Erazo - Portafolio',
  description: 'Portafolio web profesional de Kevin David Chavarro Erazo',
  keywords: ['Kevin David Chavarro Erazo', 'portafolio', 'desarrollador', 'web'],
  authors: [{ name: 'Kevin David Chavarro Erazo' }],
  robots: 'index, follow',
  icons: {
    icon: '/profile.jpg',
    shortcut: '/profile.jpg',
    apple: '/profile.jpg',
  },
  openGraph: {
    title: 'Kevin David Chavarro Erazo - Portafolio',
    description: 'Portafolio web profesional de Kevin David Chavarro Erazo',
    type: 'website',
    locale: 'es_ES',
    images: ['/profile.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased h-screen overflow-hidden`}>
        <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-black">
          {children}
        </div>
      </body>
    </html>
  )
}
