'use client'

import type { FC } from 'react'
import AuthForm from '@/components/forms/auth-form'
import { SignInSchema } from '@/lib/validations'

const SignIn: FC = () => {
  return (
    <AuthForm
      formType='SIGN_IN'
      schema={SignInSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  )
}

export default SignIn
