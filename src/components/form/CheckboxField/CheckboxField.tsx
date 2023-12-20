import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TouchableWithoutFeedback } from 'react-native'

import { Center, Icon } from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './CheckboxField.style'

type Props = {
  name: string
  readOnly?: boolean
}

const CheckboxField: FC<Props> = ({ name, readOnly }) => {
  const { control } = useFormContext()
  const {
    styles,
    theme: { colors },
  } = styleManager.useStyles(stylesheet)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TouchableWithoutFeedback
          disabled={readOnly}
          onPress={() => onChange(!value)}>
          <Center
            style={[
              styles.wrapper,
              readOnly && styles.wrapperReadOnly,
              value && styles.wrapperChecked,
            ]}>
            {value && (
              <Icon
                name="Check"
                size={20}
                color={colors.white}
                strokeWidth={3}
              />
            )}
          </Center>
        </TouchableWithoutFeedback>
      )}
    />
  )
}

CheckboxField.defaultProps = {
  readOnly: false,
}

export default CheckboxField
