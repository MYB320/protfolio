'use client'
import { useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button, buttonVariants } from '@/components/ui/button'
import { Github, ListMinus, MoreVertical, RefreshCcw, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const SpeedDial = () => {
  const [state, setState] = useState(false)
  const router = useRouter()
  return (
    <Popover open={state} onOpenChange={() => setState(!state)}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            state && 'bg-accent hover:bg-primary hover:text-primary-foreground'
          )}
          variant='ghost'
          size='icon'
        >
          {state ? (
            <X
              size={20}
              className={cn(
                'absolute transition-all duration-200',
                !state
                  ? 'rotate-0 scale-100 text-primary-foreground'
                  : 'rotate-90 scale-100'
              )}
            />
          ) : (
            <MoreVertical
              size={20}
              className={cn(
                'absolute transition-all duration-200 shadow-lg',
                state ? '-rotate-90 scale-0 text-primary' : 'rotate-0 scale-100'
              )}
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='grid gap-4 w-auto bg-transparent border-none shadow-none'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='secondary'
              size='icon'
              className='transition-all shadow-lg hover:scale-110 hover:bg-primary hover:text-primary-foreground'
              onClick={() => router.refresh()}
            >
              <RefreshCcw size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side='right'
            className='font-medium text-primary-foreground bg-primary'
          >
            <p>Refresh</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href='https://github.com/myb320'
              target='_blank'
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'icon' }),
                'transition-all shadow-lg hover:scale-110 hover:bg-primary hover:text-primary-foreground'
              )}
            >
              <Github size={18} />
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side='right'
            className='font-medium text-primary-foreground bg-primary'
          >
            <p>GitHub page</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='secondary'
              size='icon'
              className='transition-all shadow-lg hover:scale-110 hover:bg-primary hover:text-primary-foreground'
            >
              <ListMinus size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side='right'
            className='font-medium text-primary-foreground bg-primary'
          >
            <p>Coming soon</p>
          </TooltipContent>
        </Tooltip>
      </PopoverContent>
    </Popover>
  )
}
