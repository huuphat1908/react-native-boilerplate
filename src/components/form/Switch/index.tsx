import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Switch as RNSwitch } from 'react-native'

import { Box } from '@/components'
import { colors } from '@/constants'

type SwitchProps = {
  name: string
}

const Switch: FC<SwitchProps> = ({ name }) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Box>
          <RNSwitch
            style={{
              alignSelf: 'flex-start',
            }}
            thumbColor={colors.white}
            trackColor={{
              false: colors.gray,
              true: colors.blue,
            }}
            onValueChange={() => onChange(!value)}
            value={value}
          />
        </Box>
      )}
    />
  )
}
export default Switch
