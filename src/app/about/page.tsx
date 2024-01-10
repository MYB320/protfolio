import { AboutMe } from '@/views/About'
import { Education } from '@/views/Education'
import Skills from '@/views/Skills'
import { Mouse } from 'lucide-react'

export default function page() {
  return (
    <>
      <section className='relative flex justify-center items-center h-[100dvh] '>
        <div className='max-w-screen-2xl flex flex-col sm:flex-row items-center gap-12 w-full p-5 sm:p-12 border rounded-3xl bg-muted/60 backdrop-blur-sm'>
          <AboutMe />
        </div>
        <div className='absolute hidden sm:bottom-16 sm:-right-36 sm:flex flex-col items-center gap-y-2'>
          <Mouse className='animate-bounce' size={36} />
          <p className='font-semibold'>scroll down</p>
        </div>
      </section>
      <div className='absolute bottom-0 left-0 w-full h-[1px] bg-divider' />
      <section className='flex justify-center items-center h-[100dvh] '>
        <div className='max-w-screen-2xl flex flex-col sm:flex-row items-center gap-12 w-full p-5 sm:p-12 border rounded-3xl bg-muted/60 backdrop-blur-sm'>
          <Education />
        </div>
      </section>
      <div className='absolute bottom-0 left-0 w-full h-[1px] bg-divider' />
      <section className='flex justify-center items-center h-[100dvh] '>
        <div className='max-w-screen-2xl flex flex-col sm:flex-row items-center gap-12 w-full p-5 sm:p-12 border rounded-3xl bg-muted/60 backdrop-blur-sm'>
          <Skills />
        </div>
      </section>
    </>
  )
}
