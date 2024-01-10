export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative sm:mx-auto mx-4 max-w-screen-xl'>{children}</div>
  )
}
