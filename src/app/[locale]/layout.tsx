import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider, useMessages } from 'next-intl'

// COMPONENTS
import Footer from '@/components/Footer'
import Header from '@/components/Header'
// THEME PROVIDER
import { ThemeProvider } from '@/components/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Huann Almeida',
  description:
    'Here my frontend development portfolio, showcasing innovative projects and creative solutions. Discover how my passion for design and technical skills can elevate your online presence.',
}

const locales = ['pt-br', 'en']
export function generateStaticParams() {
  return locales.map(locale => {locale})
}

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode,
  params: {locale: string}
}>) {
  const messages = useMessages()
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
