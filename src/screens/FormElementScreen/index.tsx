import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import {
  Box,
  Checkbox,
  DateInput,
  Divider,
  Dropdown,
  Input,
  ScrollView,
  Switch,
  TextArea,
  TimeInput,
} from '@/components'
import { styleManager } from '@/libs'
import { formElementSchema } from '@/validations'
import { FormElementData } from '@/validations/formElementSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import { formElementScreenStyles } from './FormElementScreen.style'

const defaultValues: FormElementData = {
  input: '',
  dateInput: '',
  timeInput: '',
  checkbox: false,
  switch: false,
  textArea: '',
  dropdown: '',
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

          <TimeInput name="timeInput" placeholder="Time Input" />
          <Divider gap={20} />

          <Dropdown
            name="dropdown"
            label="Dropdown"
            data={[
              {
                label: 'Label 1',
                value: 'Value 1',
              },
              {
                label: 'Label 2',
                value: 'Value 2',
              },
            ]}
          />
          <Divider gap={20} />

          <Checkbox name="checkbox" />
          <Divider gap={20} />

          <Switch name="switch" />
          <Divider gap={20} />

          <TextArea name="textArea" placeholder="Text Area" />
          <Divider gap={20} />
        </ScrollView>
      </Box>
    </FormProvider>
  )
}

export default ButtonScreen
