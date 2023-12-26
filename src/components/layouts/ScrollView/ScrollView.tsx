import React, { FC } from 'react'
import { ScrollView as RNScrollView, ScrollViewProps } from 'react-native'

const ScrollView: FC<ScrollViewProps> = ({ children, ...rest }) => {
  return <RNScrollView {...rest}>{children}</RNScrollView>
}

export default ScrollView
