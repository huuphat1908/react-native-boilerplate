import { createUnistyles } from 'react-native-unistyles'

import { colors } from '@/constants'

import scale from './scale'

export const theme = {
  colors,
  paddings: {
    sm: scale(2),
    md: scale(4),
    lg: scale(8),
    xl: scale(12),
    xxl: scale(16),
  },
  margins: {
    sm: scale(2),
    md: scale(4),
    lg: scale(8),
    xl: scale(12),
  },
  gutters: {
    sm: scale(2),
    md: scale(4),
    lg: scale(8),
    xl: scale(12),
  },
  components: {
    container: {
      flex: 1,
    },
  },
  utils: {
    hexToRGBA: (hex: string, opacity: number) => {
      const rgb = hex
        .replace('#', '')
        .split(/(?=(?:..)*$)/)
        .map(x => parseInt(x, 16))
      return `rgba(${rgb.at(0)}, ${rgb.at(1)}, ${rgb.at(2)}, ${opacity})`
    },
    scale,
  },
} as const

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  superLarge: 2000,
  tvLike: 4000,
}

const styleManager = createUnistyles<typeof breakpoints, typeof theme>(
  breakpoints,
)

export default styleManager
