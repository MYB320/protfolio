'use client'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { transition } from '@/lib/transition'
import { fadeIn } from '@/lib/variants'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { HireMeModal } from '@/components/Hire-me'

export default function Hero() {
  const categories = [
    'Front end',
    'Back end',
    'Full stack',
    'Mobile Application',
    'Microcontrollers',
  ]

  return (
    <div className='w-full'>
      <motion.h1
        variants={fadeIn('down')}
        transition={transition()}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='w-full text-center xl:text-start uppercase'
      >
        <p className='text-4xl flex items-center justify-center sm:justify-start pb-2 '>
          &lt;<span className='text-primary text-xl font-semibold'>/</span>&gt;
        </p>
        <p className='font-bold text-4xl sm:text-7xl'>
          Mohamed Yasser <span className='text-primary'>Boureghida</span>
        </p>
        <p className='text-3xl sm:text-4xl font-thin'>Software Engineer</p>
        <hr />
        <p className='pt-2 text-primary font-medium text-3xl sm:text-6xl'>
          <Typewriter
            words={categories}
            cursor
            cursorStyle='_'
            typeSpeed={250}
            deleteSpeed={150}
            loop
          />
        </p>
      </motion.h1>
      <motion.div
        variants={fadeIn('up')}
        transition={transition()}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start text-secondary-foreground'
      >
        <HireMeModal />
        <a href='/favicon.png' download='myb-cv'>
          <Button className='group transition-all py-2.5 px-8 text-lg text-bold w-full sm:w-fit text-primary-foreground'>
            <Download size={16} className='mr-2 group-hover:animate-bounce' />{' '}
            Download CV
          </Button>
        </a>
      </motion.div>
    </div>
  )
}
