import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import {
  Checkbox,
  DateInput,
  Divider,
  Dropdown,
  HStack,
  Input,
  PrimaryButton,
  Radio,
  ScrollView,
  SecondaryButton,
  Switch,
  TextArea,
  TimeInput,
  VStack,
} from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'
import { zodResolver } from '@hookform/resolvers/zod'

import { data, defaultValues } from './constants'
import { formElementSchema } from './formElementSchema'
import { formElementScreenStyles } from './FormElementScreen.style'

const FormElementScreen = () => {
  const { isOpen: isReadOnly, toggle } = useDisclose()
  const { styles } = styleManager.useStyles(formElementScreenStyles)
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(formElementSchema()),
    mode: 'onChange',
  })

  return (
    <FormProvider {...methods}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Input name="input" placeholder="Input" readOnly={isReadOnly} />
        <Divider gap={20} />

        <DateInput
          name="dateInput"
          placeholder="Date Input"
          readOnly={isReadOnly}
        />
        <Divider gap={20} />

        <TimeInput
          name="timeInput"
          placeholder="Time Input"
          readOnly={isReadOnly}
        />
        <Divider gap={20} />

        <Dropdown
          name="dropdown"
          label="Dropdown"
          data={data}
          readOnly={isReadOnly}
        />
        <Divider gap={20} />

        <Checkbox name="checkbox" readOnly={isReadOnly} />
        <Divider gap={20} />

        <Switch name="switch" readOnly={isReadOnly} />
        <Divider gap={20} />

        <TextArea
          name="textArea"
          placeholder="Text Area"
          readOnly={isReadOnly}
        />
        <Divider gap={20} />

        <Radio name="radio" data={data} readOnly={isReadOnly} />
        <Divider gap={20} />

        <VStack style={styles.buttonGroupWrapper}>
          <PrimaryButton
            onPress={methods.handleSubmit(values => console.log(values))}>
            Submit
          </PrimaryButton>

          <SecondaryButton onPress={toggle}>
            Enable/Disable entire form
          </SecondaryButton>
        </VStack>
      </ScrollView>
    </FormProvider>
  )
}

export default FormElementScreen
