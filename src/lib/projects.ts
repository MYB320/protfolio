import db from '@/lib/db'
import { $Enums } from '@prisma/client'

export const getProjects = async ({
  query = 'All',
  page = 1,
  limit = 9,
}: {
  query?: string
  page?: number
  limit?: number
}) => {
  const currentPage = Math.max(page || 1, 1)
  /**
    @type {import('@prisma/client').Prisma.ProjectsFindManyArgs}
    */
  const options: any = {
    take: limit,
    skip: (currentPage - 1) * limit,
  }
  const countOptions: any = {}
  if (query != 'All') {
    options.where = { category: { equals: query } }
    countOptions.where = options.where
  }
  const projects = await db.projects.findMany(options)
  const count = await db.projects.count(countOptions)
  return { projects, count }
}

export const getProject = async ({ query }: { query?: string }) => {
  /**
    @type {import('@prisma/client').Prisma.ProjectsFindUniqueArgs}
    */
  const options = {
    where: { slug: query },
  }
  const project = await db.projects.findUnique(options)
  return { project }
}
