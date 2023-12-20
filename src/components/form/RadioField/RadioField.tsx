import React, { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TouchableOpacity } from 'react-native'

import { Body, Box, Center, ErrorText, HStack, VStack } from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './RadioField.style'

type Props = {
  name: string
  data: Array<RadioItem>
  readOnly?: boolean
}

const RadioField: FC<Props> = ({ name, data, readOnly }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const hasError = errors[name] ? true : false
  const { styles } = styleManager.useStyles(stylesheet)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Box style={readOnly && styles.componentContainerReadOnly}>
          <VStack style={styles.radioGroupWrapper}>
            {data.map((item, index) => {
              const isActiveItem = item.value === value

              return (
                <TouchableOpacity
                  key={index}
                  disabled={readOnly}
                  onPress={() => onChange(item.value)}>
                  <HStack style={styles.radioRowWrapper}>
                    <Center
                      style={[
                        styles.radioButtonWrapper,
                        isActiveItem && styles.radioButtonWrapperActive,
                        hasError &&
                          isActiveItem &&
                          styles.radioButtonWrapperError,
                      ]}>
                      <Box
                        style={[
                          styles.radioButtonContent,
                          isActiveItem && styles.radioButtonContentActive,
                          hasError &&
                            isActiveItem &&
                            styles.radioButtonContentError,
                        ]}
                      />
                    </Center>
                    <Body>{item.label}</Body>
                  </HStack>
                </TouchableOpacity>
              )
            })}
          </VStack>
          <ErrorText name={name} errors={errors} />
        </Box>
      )}
    />
  )
}

export default RadioField
