import * as icons from 'lucide-react-native'
import React, { FC } from 'react'

import { scale } from '@/libs'

interface IconProps extends icons.LucideProps {
  name: keyof Omit<
    Omit<typeof icons, 'createLucideIcon'>,
    'createReactComponent'
  >
  size: number
}

const Icon: FC<IconProps> = ({ name, size, ...rest }) => {
  const LucideIcon = icons[name]

  return <LucideIcon size={scale(size)} {...rest} />
}

export default Icon
