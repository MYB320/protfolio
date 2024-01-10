import { buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface IconLinlProps {
  children: React.ReactNode
  link: string
  name: string
}

export const IconLink: React.FC<IconLinlProps> = ({ children, link, name }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a className={cn('group text-foreground')} href={link} target='_blank'>
          {children}
        </a>
      </TooltipTrigger>
      <TooltipContent
        side='bottom'
        className='font-medium text-primary-foreground bg-primary'
      >
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  )
}
