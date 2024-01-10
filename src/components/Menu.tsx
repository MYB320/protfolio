'use client'

import { buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Home, LayoutGrid, User } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/Theme-button'
import { usePathname } from 'next/navigation'

const Menu = () => {
  const pathname = usePathname()

  return (
    <div
      className='fixed bottom-0 sm:bottom-6 w-full sm:w-fit left-1/2 -translate-x-1/2 bg-primary
  rounded-t-xl sm:rounded-3xl sm:shadow-xl sm!border py-3 px-6 flex items-center justify-around sm:justify-center gap-8 sm:gap-12 z-30'
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            className={cn(
              'group transition-all',
              pathname === '/'
                ? buttonVariants({ size: 'icon', variant: 'ghost_active' })
                : buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                    className: 'hover:scale-110',
                  })
            )}
            href='/'
          >
            <Home
              className={cn(
                pathname === '/'
                  ? 'text-accent-foreground'
                  : 'text-primary-foreground transition-all group-hover:text-accent-foreground group-hover:animate-wiggle'
              )}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent className='mb-3 font-medium text-primary-foreground bg-primary'>
          <p>Home</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            className={cn(
              'group transition-all',
              pathname === '/about'
                ? buttonVariants({ size: 'icon', variant: 'ghost_active' })
                : buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                    className: 'hover:scale-110',
                  })
            )}
            href='/about'
          >
            <User
              className={cn(
                pathname === '/about'
                  ? 'text-accent-foreground'
                  : 'text-primary-foreground transition-all group-hover:text-accent-foreground group-hover:animate-wiggle'
              )}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent className='mb-3 font-medium text-primary-foreground bg-primary'>
          <p>About me</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            className={cn(
              'group transition-all',
              pathname === '/projects'
                ? buttonVariants({ size: 'icon', variant: 'ghost_active' })
                : buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                    className: 'hover:scale-110',
                  })
            )}
            href='/projects'
          >
            <LayoutGrid
              className={cn(
                pathname === '/projects'
                  ? 'text-accent-foreground'
                  : 'text-primary-foreground transition-all group-hover:text-accent-foreground group-hover:animate-wiggle'
              )}
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent className='mb-3 font-medium text-primary-foreground bg-primary'>
          <p>Projects</p>
        </TooltipContent>
      </Tooltip>

      <ThemeToggle />
    </div>
  )
}

export default Menu

// className = 'text-primary-foregroun transition-all group-hover:text-accent-foreground group-hover:animate-wiggled'
