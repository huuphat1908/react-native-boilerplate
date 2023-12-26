import { useForm as useFormRHF } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { defaultValues } from './constants'
import { formElementSchema } from './formSchema'

export const useForm = () => {
  const methods = useFormRHF({
    defaultValues,
    resolver: zodResolver(formElementSchema()),
    mode: 'onChange',
  })

  return methods
}
