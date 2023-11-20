import React from 'react'

import {
  Body,
  Box,
  Divider,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Label,
  Link,
} from '@/components/ui'
import { styleManager } from '@/libs'

import { typographyScreenStyles } from './TypographyScreen.style'

const TypographyScreen = () => {
  const { styles } = styleManager.useStyles(typographyScreenStyles)

  return (
    <Box style={styles.container}>
      <H1>Heading 1</H1>
      <Divider />

      <H2>Heading 2</H2>
      <Divider />

      <H3>Heading 3</H3>
      <Divider />

      <H4>Heading 4</H4>
      <Divider />

      <H5>Heading 5</H5>
      <Divider />

      <H6>Heading 6</H6>
      <Divider />

      <Label>Label</Label>
      <Divider />

      <Link href="https://reactnative.dev/docs/linking">Link</Link>
      <Divider />

      <Body>Body</Body>
      <Divider />
    </Box>
  )
}

export default TypographyScreen
