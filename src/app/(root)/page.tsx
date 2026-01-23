import type { FC } from 'react'
import { auth } from '@/auth'

const Home: FC = async () => {
  const session = await auth()

  console.log(session)
  return (
    <>
      <div className='text-2xl text-light-500'>Hello World</div>
    </>
  )
}

export default Home
