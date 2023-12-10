import React, { FC } from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'

import { Box, HStack, Label } from '@/components'
import { styleManager } from '@/libs'

type Props = {
  label: string
  onPress: (event: GestureResponderEvent) => void
  active: boolean
}

const DrawerItem: FC<Props> = ({ label, onPress, active }) => {
  const { styles } = styleManager.useStyles(stylesheet)

  return (
    <TouchableOpacity onPress={onPress}>
      <HStack style={styles.wrapper}>
        {active && <Box style={styles.activeIndicator} />}
        <Label style={styles.itemName}>{label}</Label>
      </HStack>
    </TouchableOpacity>
  )
}

const stylesheet = styleManager.createStyleSheet(
  ({ colors, utils: { scale } }) => ({
    wrapper: {
      borderBottomWidth: scale(1),
      borderBottomColor: colors.gray,
    },
    activeIndicator: {
      width: scale(6),
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: colors.blue,
    },
    itemName: {
      paddingHorizontal: scale(16),
      paddingVertical: scale(16),
    },
  }),
)

export default DrawerItem
