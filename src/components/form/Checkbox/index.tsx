import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Pressable } from 'react-native'

import { Center, Icon } from '@/components'
import { colors } from '@/constants'
import { styleManager } from '@/libs'

import { checkboxStyles } from './Checkbox.style'

type CheckboxProps = {
  name: string
}

const Checkbox: FC<CheckboxProps> = ({ name }) => {
  const { control } = useFormContext()
  const { styles } = styleManager.useStyles(checkboxStyles)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Pressable onPress={() => onChange(!value)}>
          <Center style={[styles.wrapper, value && styles.wrapperChecked]}>
            {value && (
              <Icon
                name="Check"
                size={20}
                color={colors.white}
                strokeWidth={3}
              />
            )}
          </Center>
        </Pressable>
      )}
    />
  )
}
export default Checkbox
