import React, { ComponentProps, FC, useCallback } from 'react'
import { Linking, Text } from 'react-native'

import { colors } from '@/constant'
import { scale } from '@/libs'

type LinkProps = {
  href: string
} & ComponentProps<typeof Text>

const Link: FC<LinkProps> = ({ children, style, href, ...rest }) => {
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
