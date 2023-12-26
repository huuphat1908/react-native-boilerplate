import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { loginFormSchema } from './loginFormSchema'

export const useLoginForm = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginFormSchema()),
  })

  return methods
}
