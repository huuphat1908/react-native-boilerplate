import React from 'react'

import { Box, Divider, HStack, Label } from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './ColorScreen.style'

const ColorScreen = () => {
  const {
    styles,
    theme: { colors },
  } = styleManager.useStyles(stylesheet)

  return (
    <Box style={styles.container}>
      {Object.entries(colors).map((color, index) => (
        <Box key={index}>
          <HStack style={styles.groupWrapper}>
            <Box style={styles.colorBox(color[1])} />
            <Label>{color[0]}</Label>
          </HStack>
          <Divider />
        </Box>
      ))}
    </Box>
  )
}

export default ColorScreen
