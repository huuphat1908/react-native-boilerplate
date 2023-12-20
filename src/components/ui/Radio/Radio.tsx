import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import { Body, Box, Center, HStack, VStack } from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './Radio.style'

type Props = {
  data: Array<RadioItem>
  value: string
  onChange: (value: string) => void
  readOnly?: boolean
  hasError?: boolean
}

const Radio: FC<Props> = ({ data, value, onChange, readOnly, hasError }) => {
  const { styles } = styleManager.useStyles(stylesheet)

  return (
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
                    hasError && isActiveItem && styles.radioButtonWrapperError,
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
    </Box>
  )
}

export default Radio
