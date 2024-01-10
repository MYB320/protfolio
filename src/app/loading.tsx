'use client'
import { Container } from '@/modules/Container'
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from '@/assets/Loading.json'

export default function Loading() {
  return (
    <Container>
      <div className='flex justify-center items-center h-[100svh]'>
        <Player
          src={animationData}
          loop={true}
          autoplay
          style={{ height: '400px' }}
        />
      </div>
    </Container>
  )
}
