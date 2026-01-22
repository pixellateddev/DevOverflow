import type { FC } from 'react'
import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'

const Home: FC = async () => {
  const session = await auth()

  console.log(session)
  return (
    <>
      <div className='text-2xl text-light-500'>Hello World</div>
      <form
        className='px-10 pt-[100px]'
        action={async () => {
          'use server'
          await signOut({ redirectTo: ROUTES.SIGN_IN })
        }}
      >
        <Button type='submit'>Log Out</Button>
      </form>
    </>
  )
}

export default Home
