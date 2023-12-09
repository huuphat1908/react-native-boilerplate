import React from 'react'

import {
  Box,
  Divider,
  HStack,
  PrimaryButton,
  SecondaryButton,
} from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './ButtonScreen.style'

const ButtonScreen = () => {
  const { styles } = styleManager.useStyles(stylesheet)

  return (
    <Box style={styles.container}>
      <PrimaryButton>Primary</PrimaryButton>
      <Divider />
      <SecondaryButton>Secondary</SecondaryButton>

      <Divider />

      <PrimaryButton disabled>Inactive</PrimaryButton>
      <Divider />
      <SecondaryButton disabled>Inactive</SecondaryButton>

      <Divider />

      <HStack style={styles.twoButtonWrapper}>
        <SecondaryButton fullWidth>Cancel</SecondaryButton>
        <PrimaryButton fullWidth>Confirm</PrimaryButton>
      </HStack>
    </Box>
  )
}

export default ButtonScreen
