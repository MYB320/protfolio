import { Container } from '@/modules/Container'
import Hero from '@/views/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
        fill
        src='/home-page.svg'
        alt='Back-ground Image'
        style={{ objectFit: 'cover', overflow: 'hidden' }}
      />
      <Container>
        <section className='flex justify-center items-center h-[100svh]'>
          <div className='max-w-screen-2xl flex flex-col sm:flex-row items-center gap-12 w-full p-12 border rounded-3xl bg-muted/60 backdrop-blur-sm'>
            <Hero />
          </div>
        </section>
      </Container>
    </>
  )
}
