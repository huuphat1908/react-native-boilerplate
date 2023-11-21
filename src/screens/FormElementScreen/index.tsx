import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { DateInput, Input } from '@/components/form'
import { Box, Divider } from '@/components/ui'
import { styleManager } from '@/libs'
import { formElementSchema } from '@/validations'
import { FormElementData } from '@/validations/formElementSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import { formElementScreenStyles } from './FormElementScreen.style'

const defaultValues: FormElementData = {
  input: '',
  dateInput: '',
}

const ButtonScreen = () => {
  const { styles } = styleManager.useStyles(formElementScreenStyles)
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(formElementSchema()),
  })

  return (
    <FormProvider {...methods}>
      <Box style={styles.container}>
        <Input name="input" />
        <Divider />

        <DateInput name="dateInput" />
        <Divider />
      </Box>
    </FormProvider>
  )
}

export default ButtonScreen
