'use client'
import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

import { reveal } from '@/lib/variants'
import { transition } from '@/lib/transition'

interface RevealProps {
  children: ReactNode
}

const Reveal: FC<RevealProps> = ({ children }) => {
  return (
    <div className='relative'>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={transition()}
      >
        {children}
      </motion.div>
      <motion.div
        variants={reveal()}
        initial='hidden'
        transition={{ duration: 0.75, ease: 'easeIn' }}
        whileInView='visible'
        viewport={{ once: true }}
        className='absolute inset-0 bg-primary z-10'
      ></motion.div>
    </div>
  )
}

export default Reveal
