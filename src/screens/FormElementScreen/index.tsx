import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Box, DateInput, Divider, Input, ScrollView } from '@/components'
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
    mode: 'onChange',
  })

  return (
    <FormProvider {...methods}>
      <Box style={styles.container}>
        <ScrollView>
          <Input name="input" placeholder="Input" />
          <Divider gap={20} />

          <DateInput name="dateInput" placeholder="Date Input" />
          <Divider gap={20} />
        </ScrollView>
      </Box>
    </FormProvider>
  )
}

export default ButtonScreen
