import React from 'react'

import { Accordion, Box, Divider, Text } from '@/components'
import { styleManager } from '@/libs'

import { stylesheet } from './ComponentScreen.style'

const ComponentScreen = () => {
  const { styles } = styleManager.useStyles(stylesheet)

  return (
    <Box style={styles.container}>
      <Accordion title="Accordion">
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </Accordion>
      <Divider />
    </Box>
  )
}

export default ComponentScreen
