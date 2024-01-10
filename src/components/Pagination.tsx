'use client'
import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Pagination({
  page,
  maxpage,
  search,
  category,
  pathname,
}: {
  page: number
  maxpage: number
  search?: string | undefined
  category: string
  pathname: string
}) {
  const [active, setActive] = React.useState(page)

  const next = () => {
    if (active === maxpage) return

    setActive(active + 1)
  }

  const prev = () => {
    if (active === 1) return

    setActive(active - 1)
  }

  return (
    <div className='flex justify-end items-center py-4 gap-4'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={{
              pathname: pathname,
              query: {
                ...(category === 'All' ? {} : { category }),
                ...(search ? { search } : {}),
                page: page > 1 ? page - 1 : 1,
              },
            }}
            className={cn(
              buttonVariants({ size: 'icon', variant: 'ghost' }),
              'flex items-center gap-2 group',
              active === 1 && 'pointer-events-none text-muted-foreground'
            )}
            onClick={prev}
          >
            <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' />
          </Link>
        </TooltipTrigger>
        <TooltipContent side='top' className={`${active === 1 && 'hidden'}`}>
          <p>Previous</p>
        </TooltipContent>
      </Tooltip>
      <div className='flex items-center justify-center border rounded-sm bg-background text-sm text-foreground h-10 w-12'>
        {active} / {maxpage}
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={{
              pathname: pathname,
              query: {
                ...(category === 'All' ? {} : { category }),
                ...(search ? { search } : {}),
                page: page + 1,
              },
            }}
            className={cn(
              buttonVariants({ size: 'icon', variant: 'ghost' }),
              'flex items-center gap-2',
              active === maxpage && 'pointer-events-none text-muted-foreground'
            )}
            onClick={next}
          >
            <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
          </Link>
        </TooltipTrigger>
        <TooltipContent side='top' className={`${active === 5 && 'hidden'}`}>
          <p>Next</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
