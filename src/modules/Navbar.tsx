import Menu from '@/components/Menu'

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative'>
      {children}
      <Menu />
    </div>
  )
}
