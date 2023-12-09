import React, { FC, useCallback } from 'react'
import { Linking, Text, TextProps } from 'react-native'

import { styleManager } from '@/libs'

type LinkProps = {
  href: string
} & TextProps

const Link: FC<LinkProps> = ({ children, style, href, ...rest }) => {
  const {
    theme: {
      colors,
      utils: { scale },
    },
  } = styleManager.useStyles()

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(href)

    if (supported) {
      await Linking.openURL(href)
    } else {
      console.log(`Don't know how to open this URL: ${href}`)
    }
  }, [href])

  return (
    <Text
      style={[
        {
          color: colors.blue,
          fontSize: scale(14),
          textDecorationLine: 'underline',
          fontFamily: 'SFProText-Regular',
        },
        style,
      ]}
      onPress={handlePress}
      {...rest}>
      {children}
    </Text>
  )
}

export default Link
