import React, { FC } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

import { Body, HStack, Icon } from '@/components/ui'
import { colors } from '@/constants'
import { styleManager } from '@/libs'

import { errorTextStyles } from './ErrorText.style'

type ErrorTextProps = {
  name: string
  errors: FieldErrors<FieldValues>
}

const ErrorText: FC<ErrorTextProps> = ({ name, errors }) => {
  const { styles } = styleManager.useStyles(errorTextStyles)
  const hasError = errors[name] ? true : false

  if (!hasError) {
    return null
  }

  return (
    <HStack style={styles.wrapper}>
      <Icon name="AlertCircle" size={16} color={colors.red} />
      <Body style={styles.message}>{errors[name]?.message as string}</Body>
    </HStack>
  )
}

export default ErrorText
