import type { Metadata } from 'next'
import { Container } from '@/modules/Container'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'MYB - About me',
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
        src='/bg-page.svg'
        alt='Back-ground Image'
        style={{ objectFit: 'cover', overflow: 'hidden' }}
      />
      <Container>{children}</Container>
    </>
  )
}
