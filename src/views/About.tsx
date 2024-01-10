'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, scale } from '@/lib/variants'
import { transition } from '@/lib/transition'
import Reveal from '@/components/Reveal'
import { Check, Github, Instagram, Linkedin } from 'lucide-react'
import { IconLink } from '@/components/IconLink'

export const AboutMe = () => {
  return (
    <>
      <div className='flex flex-1 flex-col gap-4'>
        <Reveal>
          <h2 className='text-start text-4xl sm:text-6xl font-semibold uppercase'>
            About <span className='text-primary'> me</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className='text-start text-base sm:text-xl'>
            Hi, my name is <span className='text-primary'>Mohamed Yasser</span>.
            I'm forward-thinking Software Engineer with background working
            productively in dynamic environments. Fluent in JavaScript and Rust
            programming languages
          </p>
        </Reveal>
        <motion.div
          variants={fadeIn('up')}
          transition={transition()}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false }}
          className='flex items-center justify-center xl:justify-start gap-6 py-4'
        >
          <IconLink name='Gihub' link='https://github.com/myb320'>
            <Github className='group-hover:text-primary' />
          </IconLink>
          <IconLink name='Linkedin' link='https://linkedin.com/in/myb20'>
            <Linkedin className='group-hover:text-primary' />
          </IconLink>

          <IconLink name='Instagram' link='https://instagram.com/myb320'>
            <Instagram className='group-hover:text-primary' />
          </IconLink>
        </motion.div>

        <div className='flex flex-col'>
          <Reveal>
            <p className='text-lg sm:text-xl text-start font-semibold'>
              Work Flow
            </p>
          </Reveal>
          <ul className='list-none pt-2 space-y-1 text-center'>
            <Reveal>
              <li className='text-base sm:text-lg flex items-center justify-start'>
                <Check className='text-primary sm:visible mr-0.5' />
                <p>Agile Development & Scrum</p>
              </li>
            </Reveal>
            <Reveal>
              <li className='text-base sm:text-lg flex items-center justify-start'>
                <Check className='text-primary sm:visible mr-0.5' />
                <p>Robust Programming & data structuring</p>
              </li>
            </Reveal>
            <Reveal>
              <li className='text-base sm:text-lg flex items-center justify-start'>
                <Check className='text-primary sm:visible mr-0.5' />
                <p>Cross platforms Testing & Debugging</p>
              </li>
            </Reveal>

            <Reveal>
              <li className='text-base sm:text-lg flex items-center justify-start'>
                <Check className='text-primary sm:visible mr-0.5' />
                <p>Cross Functional Teams</p>
              </li>
            </Reveal>
          </ul>
        </div>
      </div>

      <div className='flex-1 flex items-center justify-center my-auto'>
        <motion.img
          variants={scale()}
          transition={transition()}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false }}
          src='/about-illustration.svg'
          alt=''
          className='sm:w-fit w-56 hover:animate-wiggle transition-all'
        />
      </div>
    </>
  )
}
