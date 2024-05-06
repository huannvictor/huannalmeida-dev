import './globals.css'

import type {Metadata} from 'next'
import {Outfit} from 'next/font/google'

// COMPONENTS
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
// THEME PROVIDER
import {ThemeProvider} from '@/src/components/ThemeProvider'

const outfit = Outfit({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Huann Almeida',
  description:
    'Here my frontend development portfolio, showcasing innovative projects and creative solutions. Discover how my passion for design and technical skills can elevate your online presence.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
