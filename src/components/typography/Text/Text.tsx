import React, { FC } from 'react'
import { Text as RNText, TextProps } from 'react-native'

import { styleManager } from '@/libs'

const Text: FC<TextProps> = ({ children, style, ...rest }) => {
  const {
    theme: {
      colors,
      utils: { scale },
    },
  } = styleManager.useStyles()

  return (
    <RNText
      {...rest}
      style={[
        {
          color: colors.black,
          fontSize: scale(13),
          fontFamily: 'SFProText-Regular',
        },
        style,
      ]}>
      {children}
    </RNText>
  )
}

export default Text
