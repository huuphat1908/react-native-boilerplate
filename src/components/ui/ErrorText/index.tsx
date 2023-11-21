import React, { FC } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

import { Body } from '@/components'
import { colors } from '@/constants'

type ErrorTextProps = {
  name: string
  errors: FieldErrors<FieldValues>
}

const ErrorText: FC<ErrorTextProps> = ({ name, errors }) => {
  const hasError = errors[name] ? true : false

  return hasError ? (
    <Body
      style={{
        color: colors.red,
      }}>
      {errors[name]?.message as string}
    </Body>
  ) : null
}

export default ErrorText
