'use client'

import Reveal from '@/components/Reveal'
import { Check } from 'lucide-react'
import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  COriginal,
  CplusplusOriginal,
  PythonOriginal,
  RustPlain,
  JavaOriginal,
  NodejsOriginal,
  NextjsLine,
  TailwindcssPlain,
  ReactOriginal,
  VuejsOriginal,
  FirebasePlain,
  GitOriginal,
  ArduinoOriginal,
  LinuxOriginal,
  VscodeOriginal,
  ChromePlain,
  FirefoxOriginal,
  PostgresqlOriginal,
  MongodbOriginal,
  MysqlOriginal,
} from 'devicons-react'
import { motion } from 'framer-motion'
import { fadeIn, scale } from '@/lib/variants'
import { transition } from '@/lib/transition'

export default function Skills() {
  return (
    <>
      <div className='flex flex-1 flex-col gap-4'>
        <Reveal>
          <h2 className='text-center xl:text-start text-4xl sm:text-6xl font-semibold uppercase'>
            ski<span className='text-primary'>lls</span>
          </h2>
        </Reveal>
        <div className='mt-4 pt-2 space-y-2 items-end'>
          <Reveal>
            <div className='flex items-center justify-center sm:justify-start'>
              <p className='text-xl font-semibold'>Programming languages</p>
            </div>
          </Reveal>
          <Reveal>
            <ul className='grid grid-cols-6 sm:flex gap-4 list-none items-center text-foreground py-4'>
              <li>
                <Html5Original
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <Css3Original
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <JavascriptOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <COriginal className='bg-slate-200 rounded-lg p-1' size='40' />
              </li>
              <li>
                <CplusplusOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <PythonOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <JavaOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <RustPlain className='bg-slate-200 rounded-lg p-1' size='40' />
              </li>
            </ul>
          </Reveal>
          <Reveal>
            <div className='flex items-center justify-center sm:justify-start'>
              <p className='text-xl font-semibold'>Frameworks</p>
            </div>
          </Reveal>
          <Reveal>
            <ul className='grid grid-cols-6 sm:flex gap-4 list-none items-center py-4'>
              <li>
                <NodejsOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <ReactOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <NextjsLine className='bg-slate-200 rounded-lg p-1' size='40' />
              </li>
              <li>
                <TailwindcssPlain
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <VuejsOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <FirebasePlain
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <ArduinoOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
            </ul>
          </Reveal>
          <Reveal>
            <div className='flex items-center justify-center sm:justify-start'>
              <p className='text-xl font-semibold'>Tools</p>
            </div>
          </Reveal>
          <Reveal>
            <ul className='grid grid-cols-6 sm:flex gap-4 list-none items-center py-4'>
              <li>
                <LinuxOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <VscodeOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <GitOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <PostgresqlOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <MongodbOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <MysqlOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <ChromePlain
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
              <li>
                <FirefoxOriginal
                  className='bg-slate-200 rounded-lg p-1'
                  size='40'
                />
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center sm:justify-starty-center my-auto'>
        <motion.img
          variants={scale()}
          transition={transition()}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false }}
          src='/multitasling.svg'
          alt=''
          className='sm:w-4/5 w-0 hover:animate-wiggle transition-all'
        />
      </div>
    </>
  )
}
