import { NextResponse } from 'next/server'
import { $Enums } from '@prisma/client'
import { createNewHiring } from '@/lib/projects'

interface bodyType {
  name: string
  email: string
  tel: string
  type: $Enums.Type
  message: string
}

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, tel, type, message }: bodyType = body.values
  if (!name || !email || !tel || !message || !type)
    return new NextResponse('Missing name, email, tel, message, type', {
      status: 400,
    })
  const hires = createNewHiring({ name, email, tel, type, message })
  return NextResponse.json(hires)
}
