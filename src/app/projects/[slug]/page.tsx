import { Container } from '@/modules/Container'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getProject } from '@/lib/projects'
import { Url } from 'next/dist/shared/lib/router/router'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'

export default async function Project({
  params,
}: {
  params: { slug: string }
}) {
  const { project } = await getProject({ query: params.slug })
  const catigoryBadge = project?.category.toString().replace(/_/g, ' ')
  const readme = false
  return (
    <Container>
      <div className='flex flex-col-reverse sm:flex-row gap-4 pt-12 pb-24 sm:py-0'>
        <div className='bg-primary/20 rounded-xl sm:rounded-none p-4 h-fit sm:h-screen sm:w-1/3 flex items-center'>
          <ScrollArea className='h-full rounded-xl'>
            {project?.imgaes &&
              project?.imgaes.map((url) => (
                <Image
                  className='rounded-xl my-4'
                  key={url}
                  src={url}
                  alt={project?.slug as string}
                  width={390}
                  height={194}
                />
              ))}
          </ScrollArea>
        </div>
        <div className='sm:w-2/3 my-auto'>
          <div className='mb-6'>
            <Link
              className={buttonVariants({
                variant: 'outline',
              })}
              href='/projects'
            >
              <ArrowLeft size={14} className='mr-1' />
              Back
            </Link>
          </div>
          <Card className='mb-6'>
            <CardHeader className='pb-2'>
              <div>
                <Badge className='border-primary' variant='outline'>
                  {catigoryBadge}
                </Badge>
              </div>
              <CardTitle className='pt-2'>{project?.name}</CardTitle>
              <CardDescription>{project?.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='py-2  border-t'>
                <p className='font-semibold'>Technologies:</p>
                <div className='space-x-1 pb-2'>
                  {project?.technologies.map((technology) => (
                    <Badge>{technology}</Badge>
                  ))}
                </div>
              </div>
              {project?.resume != '' && (
                <div className='py-2 border-t'>
                  <p className='font-semibold'>Description:</p>
                  <p className='leading-7 [&:not(:first-child)]:mt-2'>
                    {project?.resume}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className='space-x-4 justify-end'>
              {project?.repoUrl != '' && (
                <Link
                  href={project?.repoUrl as Url}
                  target='_blank'
                  className={buttonVariants({ variant: 'secondary' })}
                >
                  Go to the Ripo
                </Link>
              )}
              {project?.liveDemoUrl != '' && (
                <Link
                  href={project?.liveDemoUrl as Url}
                  target='_blank'
                  className={buttonVariants({ variant: 'outline' })}
                >
                  Live demo
                </Link>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </Container>
  )
}
