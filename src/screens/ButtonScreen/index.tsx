import React from 'react'

import {
  Box,
  Divider,
  HStack,
  PrimaryButton,
  SecondaryButton,
} from '@/components/ui'
import { styleManager } from '@/libs'

import { buttonScreenStyles } from './ButtonScreen.style'

const ButtonScreen = () => {
  const { styles } = styleManager.useStyles(buttonScreenStyles)

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
