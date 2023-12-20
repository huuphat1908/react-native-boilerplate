import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
  BottomSheetField,
  CheckboxField,
  DateInputField,
  Divider,
  DropdownField,
  InputField,
  PrimaryButton,
  Radio,
  ScrollView,
  SecondaryButton,
  SwitchField,
  TextAreaField,
  TimeInputField,
  VStack,
} from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'
import { zodResolver } from '@hookform/resolvers/zod'

import { data, defaultValues } from './constants'
import { formElementSchema } from './formElementSchema'
import { stylesheet } from './FormElementScreen.style'

const FormElementScreen = () => {
  const { isOpen: isReadOnly, toggle } = useDisclose()
  const { styles } = styleManager.useStyles(stylesheet)
  const { t } = useTranslation('formElementScreen')
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
        <InputField
          name="input"
          placeholder={t('placeholder.input')}
          readOnly={isReadOnly}
        />
        <Divider gap={20} />

        <DateInputField
          name="dateInput"
          placeholder="Date Input"
          readOnly={isReadOnly}
        />
        <Divider gap={20} />

        <TimeInputField
          name="timeInput"
          placeholder="Time Input"
          readOnly={isReadOnly}
        />
        <Divider gap={20} />

        <DropdownField
          name="dropdown"
          label="Dropdown"
          data={data}
          readOnly={isReadOnly}
        />
        <Divider gap={20} />

        <BottomSheetField
          name="bottomSheet"
          label="Bottom Sheet"
          data={data}
          readOnly={isReadOnly}
        />
        <Divider gap={20} />

        <CheckboxField name="checkbox" readOnly={isReadOnly} />
        <Divider gap={20} />

        <SwitchField name="switch" readOnly={isReadOnly} />
        <Divider gap={20} />

        <TextAreaField
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
