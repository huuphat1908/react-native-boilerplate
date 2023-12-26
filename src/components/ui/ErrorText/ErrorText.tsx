import React, { FC } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

import { Text } from '@/components'
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
    <Text
      style={{
        marginTop: scale(2),
        color: colors.red,
      }}>
      {errors[name]?.message as string}
    </Text>
  ) : null
}

export default ErrorText
