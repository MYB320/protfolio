import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'

export const ProjectCard = ({
  imgSrc,
  title,
  description,
  catigory,
  slug,
}: {
  imgSrc: string
  title: string
  description: string
  catigory: string
  slug: string
}) => {
  const catigoryBadge =
    catigory.replace(/_/g, ' ').charAt(0).toUpperCase() +
    catigory.replace(/_/g, ' ').slice(1)
  return (
    <Link href={`projects/${slug}`}>
      <Card className='relative group h-56 transition-all hover:cursor-pointer'>
        <Image className='rounded-xl' fill src={imgSrc} alt={slug} />
        <CardHeader className='h-full border shadow-lg rounded-xl felx justify-end space-y-2 bg-gradient-to-t from-background to-primary/25 transition-all opacity-0 group-hover:backdrop-blur-sm group-hover:opacity-100'>
          <div>
            <Badge variant='outline' className='border-primary'>
              {catigoryBadge}
            </Badge>
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
