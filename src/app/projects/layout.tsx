import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Huann Almeida - My Projects',
  description: 'See my projects here.',
}

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
