'use client'
import {
  DrawerTrigger,
  DrawerContent,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from '@/components/ui/drawer'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { Loader2, UserCheck } from 'lucide-react'
import { toast } from 'sonner'

export const HireMeModal = () => {
  const [openDraw, setOpenDraw] = useState(false)
  const [loading, isLoading] = useState(false)
  const formSchema = z.object({
    name: z.string().min(5).max(50),
    email: z.string().email(),
    tel: z.string().max(14),
    type: z.string(),
    message: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      tel: '',
      type: '',
      message: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    isLoading(true)
    const res = await fetch('/api/hires', {
      method: 'POST',
      headers: {
        'Content-Type': ' application/json',
      },
      body: JSON.stringify({ values }),
    })
      .then(() => {
        isLoading(false)
        toast.success('your offert has been submited')
      })
      .catch((error) => toast.error(error))
      .finally(() => {
        setOpenDraw(!openDraw)
      })
  }
  return (
    <Drawer open={openDraw} onOpenChange={(open) => setOpenDraw(open)}>
      <DrawerTrigger asChild>
        <Button
          variant='secondary'
          className='group transition-all py-2.5 px-8 text-lg text-bold w-full sm:w-fit'
        >
          <UserCheck size={16} className='mr-2 group-hover:animate-pulse' />
          Hire me
        </Button>
      </DrawerTrigger>

      <DrawerContent className='max-w-lg mx-auto p-6'>
        <DrawerHeader>
          <DrawerTitle>Hire me</DrawerTitle>
          <DrawerDescription>you can send me your info</DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 py-4'
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your name:</FormLabel>
                  <FormControl>
                    <Input disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your email</FormLabel>
                  <FormControl>
                    <Input disabled={loading} type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='tel'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Telephone:</FormLabel>
                  <FormControl>
                    <Input disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Tell more about your Ofert'
                      className='resize-none'
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your offert type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={loading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select one of the following catigories' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='Full_stack'>Full stack</SelectItem>
                      <SelectItem value='Front_end'>Front end</SelectItem>
                      <SelectItem value='Back_end'>Back end</SelectItem>
                      <SelectItem value='Micro_controllers'>
                        Microcontrollers
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DrawerFooter>
              <Button disabled={loading} type='submit'>
                {loading ? (
                  <Loader2 className='animate-spin h-6 w-6 mx-4' />
                ) : (
                  'Send'
                )}
              </Button>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  )
}
