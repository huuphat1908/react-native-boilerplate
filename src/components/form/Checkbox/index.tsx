import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TouchableWithoutFeedback } from 'react-native'

import { Center, Icon } from '@/components'
import { colors } from '@/constants'
import { styleManager } from '@/libs'

import { checkboxStyles } from './Checkbox.style'

type CheckboxProps = {
  name: string
  readOnly?: boolean
}

const Checkbox: FC<CheckboxProps> = ({ name, readOnly }) => {
  const { control } = useFormContext()
  const { styles } = styleManager.useStyles(checkboxStyles)

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

Checkbox.defaultProps = {
  readOnly: false,
}

export default Checkbox
