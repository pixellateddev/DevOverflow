'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import type { FC } from 'react'
import { toast } from 'sonner'
import ROUTES from '@/constants/routes'
import { Button } from '../ui/button'

const SocialAuthForm: FC = () => {
  const router = useRouter()
  const handleSignIn = async (provider: 'github' | 'google') => {
    try {
      const res = await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      })

      if ('url' in res && typeof res.url === 'string') {
        router.push(res.url)
      }

      console.log(res)
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'An error occured during sign in',
      )
    }
  }
  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
      <Button
        onClick={() => handleSignIn('github')}
        className='background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3'
      >
        <Image
          src='/icons/github.svg'
          alt='Github Logo'
          width={20}
          height={20}
          className='invert-colors mr-2.5 object-contain'
        />
        <span>Log in with GitHub</span>
      </Button>
    </div>
  )
}

export default SocialAuthForm
