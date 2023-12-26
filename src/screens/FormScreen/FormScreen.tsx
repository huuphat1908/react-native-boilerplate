import React from 'react'
import { FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
  BottomSheetField,
  CheckboxField,
  DateInputField,
  Divider,
  DropdownField,
  InputField,
  PrimaryButton,
  RadioField,
  ScrollView,
  SecondaryButton,
  SwitchField,
  TextAreaField,
  TimeInputField,
  VStack,
} from '@/components'
import { useDisclose } from '@/hooks'
import { styleManager } from '@/libs'

import { data } from './constants'
import { stylesheet } from './FormScreen.style'
import { useForm } from './useForm'

const FormScreen = () => {
  const [isReadOnly, , , toggleReadOnly] = useDisclose()
  const { styles } = styleManager.useStyles(stylesheet)
  const { t } = useTranslation('formElementScreen')
  const formMethods = useForm()

  return (
    <FormProvider {...formMethods}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        automaticallyAdjustKeyboardInsets>
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

        <RadioField name="radio" data={data} readOnly={isReadOnly} />
        <Divider gap={20} />

        <VStack style={styles.buttonGroupWrapper}>
          <PrimaryButton
            onPress={formMethods.handleSubmit(values => console.log(values))}>
            Submit
          </PrimaryButton>

          <SecondaryButton onPress={toggleReadOnly}>
            Enable/Disable entire form
          </SecondaryButton>
        </VStack>
      </ScrollView>
    </FormProvider>
  )
}

export default FormScreen
