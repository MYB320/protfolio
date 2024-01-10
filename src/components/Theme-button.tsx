'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <Tooltip>
      <DropdownMenu modal>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='group text-primary-foreground'
            >
              <Sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-secondary-foreground group-hover:animate-wiggle dark:group-hover:animate-none' />
              <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-secondary-foreground dark:group-hover:animate-wiggle' />
            </Button>
          </TooltipTrigger>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='bg-primary text-primary-foreground mb-3'
          side='top'
          align='center'
        >
          <DropdownMenuItem onClick={() => setTheme('light')}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent className='mb-3 font-medium text-primary-foreground bg-primary'>
        <p>Theme Toggle</p>
      </TooltipContent>
    </Tooltip>
  )
}
