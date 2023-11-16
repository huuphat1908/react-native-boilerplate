import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { HStack, PrimaryButton, SecondaryButton, VStack } from '@/components/ui'
import { colors } from '@/constant'
import { styleManager } from '@/libs'

import { uiStyles } from './UI.styles'

const UI = () => {
  const { styles, theme } = styleManager.useStyles(uiStyles)

  return (
    <ScrollView contentContainerStyle={styles.parentContainer}>
      <VStack style={styles.groupContainer}>
        <Text style={theme.text.h3}>Buttons</Text>

        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
      </VStack>

      <VStack style={styles.groupContainer}>
        <Text style={theme.text.h3}>Typography</Text>
        <Text style={theme.text.link}>Link</Text>
        <Text style={theme.text.label}>Label</Text>
        <Text style={theme.text.body}>Body</Text>
        <Text style={theme.text.h6}>Heading 6</Text>
        <Text style={theme.text.h5}>Heading 5</Text>
        <Text style={theme.text.h4}>Heading 4</Text>
        <Text style={theme.text.h3}>Heading 3</Text>
        <Text style={theme.text.h2}>Heading 2</Text>
        <Text style={theme.text.h1}>Heading 1</Text>
      </VStack>

      <VStack style={styles.groupContainer}>
        <Text style={theme.text.h3}>Colors</Text>
        <HStack style={styles.groupContainer}>
          <View style={styles.colorBox(colors.black)} />
          <View style={styles.colorBox(colors.white)} />
          <View style={styles.colorBox(colors.blue)} />
          <View style={styles.colorBox(colors.gold)} />
          <View style={styles.colorBox(colors.red)} />
          <View style={styles.colorBox(colors.darkRed)} />
        </HStack>
      </VStack>
    </ScrollView>
  )
}

export default UI
