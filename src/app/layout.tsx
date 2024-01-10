import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/modules/Theme'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Navbar from '@/modules/Navbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})
export const metadata: Metadata = {
  title: 'MYB - Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.png' sizes='any' />
      <link
        rel='apple-touch-icon'
        href='/apple-icon?<generated>'
        type='image/<generated>'
        sizes='<generated>'
      />
      <body className={poppins.className}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <TooltipProvider>
            <Navbar>{children}</Navbar>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
