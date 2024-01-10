'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SpeedDial } from '@/components/SpeedDial'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'

export const Categories = ({
  pathname,
  category,
  search,
}: {
  pathname: string
  category: string
  search?: string | undefined
}) => {
  const router = useRouter()
  const [select, setSelect] = useState(category)
  const initialRender = useRef(true)
  const [query] = useDebounce(select, 150)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (!query) {
      router.push(search ? `${pathname}?search=${search}` : `${pathname}`)
    } else if (query === 'All') {
      router.push(search ? `${pathname}?search=${search}` : `${pathname}`)
    } else {
      router.push(
        search
          ? `${pathname}?category=${query}&search=${search}`
          : `${pathname}?category=${query}`
      )
    }
  }, [query])
  return (
    <div className='flex items-center gap-2'>
      <Select defaultValue={select} onValueChange={(value) => setSelect(value)}>
        <SelectTrigger className='sm:w-64 w-36'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            <SelectItem value='All'>All</SelectItem>
            <SelectItem value='Full_stack'>Full stack</SelectItem>
            <SelectItem value='Front_end'>Front end</SelectItem>
            <SelectItem value='Back_end'>Back end</SelectItem>
            <SelectItem value='Mobile_app'>Mobile App</SelectItem>
            <SelectItem value='Micro_controllers'>Microcontrollers</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <SpeedDial />
    </div>
  )
}
