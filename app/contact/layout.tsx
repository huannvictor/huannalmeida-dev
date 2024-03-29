import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Huann Almeida - Contact',
  description: 'Contact me.',
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
