import { ProjectCard } from '@/components/ProjectCard'
import { Categories } from '@/components/Categories'
import { Pagination } from '@/components/Pagination'
import { getProjects } from '@/lib/projects'
import Reveal from '@/components/Reveal'

export default async function Projects({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const category =
    typeof searchParams.category === 'string' ? searchParams.category : 'All'
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const pageLimit = 9
  const { projects, count } = await getProjects({
    query: category,
    page,
    limit: pageLimit,
  })
  const maxPage = Math.ceil(count / pageLimit)

  return (
    <section className='h-[100svh] my-10'>
      <div className='flex justify-between items-center'>
        <h2 className='flex-1 text-4xl sm:text-6xl font-bold uppercase'>
          Proje<span className='text-primary'>cts</span>
        </h2>
        <Categories pathname='/projects' category={category} />
      </div>
      <div className='py-4'>
        {count > pageLimit && (
          <Pagination
            pathname='/projects'
            page={page}
            maxpage={maxPage}
            category={category}
          />
        )}
      </div>
      {projects && (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {projects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard
                slug={project.slug}
                title={project.name}
                description={project.description}
                catigory={project.category}
                imgSrc={project.thumbnailUrl}
              />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
