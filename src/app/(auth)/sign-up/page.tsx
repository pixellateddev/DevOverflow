'use client'

import type { FC } from 'react'
import AuthForm from '@/components/forms/auth-form'
import { SignUpSchema } from '@/lib/validations'

const SignUp: FC = () => {
  return (
    <AuthForm
      formType='SIGN_UP'
      schema={SignUpSchema}
      defaultValues={{ username: '', name: '', email: '', password: '' }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  )
}

export default SignUp
