import type { Metadata } from 'next'
import { Container } from '@/modules/Container'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'MYB - Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Image
        fill
        className='object-cover'
        src='/bg-page.svg'
        alt='Back-ground Image'
      />
      <Container>{children}</Container>
    </>
  )
}
