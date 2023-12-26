import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { defaultValues } from './constants'
import { formElementSchema } from './formElementSchema'

export const useFormElementForm = () => {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(formElementSchema()),
    mode: 'onChange',
  })

  return methods
}
