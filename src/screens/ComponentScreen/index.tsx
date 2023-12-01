import React from 'react'

import { Accordion, Body, Box, Divider } from '@/components'
import { styleManager } from '@/libs'

import { componentScreenStyles } from './ComponentScreen.style'

const ComponentScreen = () => {
  const { styles } = styleManager.useStyles(componentScreenStyles)

  return (
    <Box style={styles.container}>
      <Accordion title="Accordion">
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Body>
      </Accordion>
      <Divider />
    </Box>
  )
}

export default ComponentScreen
