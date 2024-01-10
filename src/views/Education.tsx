'use client'
import { motion } from 'framer-motion'
import { scale } from '@/lib/variants'
import { transition } from '@/lib/transition'
import Reveal from '@/components/Reveal'

export const Education = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <div>
          <Reveal>
            <h2 className='text-center xl:text-start text-4xl sm:text-6xl font-bold uppercase mb-6'>
              Educat<span className='text-primary'>ion</span>
            </h2>
          </Reveal>
          <div className='my-4 py-2 felx justify-center w-fit'>
            <Reveal>
              <h3 className='pb-2 text-xl sm:text-3xl uppercase font-semibold items-center'>
                University 20 August 1955 -{' '}
                <span className='text-primary sm:text-2xl'>Skikda, DZ</span>
              </h3>
            </Reveal>
            <Reveal>
              <div className='flex justify-start items-center gap-2 cursor-pointer'>
                <p className='text-xl uppercase font-semibold'>Master Degree</p>
                <span className='text-primary'>Oct 2019 – Jul 2021</span>
              </div>
            </Reveal>
            <Reveal>
              <p className='pt-2 text-sm sm:text-base w-4/5'>
                Computer And Information Sciences - Software engineering and
                advance applications
              </p>
            </Reveal>
            <Reveal>
              <div className='flex justify-start items-center gap-2 pt-4'>
                <p className='text-xl uppercase font-semibold'>
                  Bachelor Degree
                </p>
                <span className='text-primary'>Oct 2016 – Jul 2019</span>
              </div>
            </Reveal>
            <Reveal>
              <p className='pt-2 text-sm sm:text-base w-4/5'>
                Computer And Information Sciences - Information systems and
                software engineering
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center my-auto'>
        <motion.img
          variants={scale()}
          transition={transition()}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false }}
          src='/certificate.svg'
          alt=''
          className='sm:w-3/5 w-0 hover:animate-wiggle transition-all'
        />
      </div>
    </>
  )
}
