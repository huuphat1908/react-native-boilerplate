import React, { FC } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

import { Body } from '@/components'
import { styleManager } from '@/libs'

type Props = {
  name: string
  errors: FieldErrors<FieldValues>
}

const ErrorText: FC<Props> = ({ name, errors }) => {
  const {
    theme: {
      colors,
      utils: { scale },
    },
  } = styleManager.useStyles()
  const hasError = errors[name] ? true : false

  return hasError ? (
    <Body
      style={{
        marginTop: scale(2),
        color: colors.red,
      }}>
      {errors[name]?.message as string}
    </Body>
  ) : null
}

export default ErrorText
