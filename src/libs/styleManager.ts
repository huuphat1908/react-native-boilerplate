import { createUnistyles } from 'react-native-unistyles'

import { colors } from '@/constant'

import scale from './scale'

export const theme = {
  colors,
  margins: {
    sm: scale(2),
    md: scale(4),
    lg: scale(8),
    xl: scale(12),
  },
  text: {
    h1: {
      color: colors.black,
      fontSize: scale(30),
      fontWeight: 'bold',
    },
    h2: {
      color: colors.black,
      fontSize: scale(26),
      fontWeight: 'bold',
    },
    h3: {
      color: colors.black,
      fontSize: scale(22),
      fontWeight: 'bold',
    },
    h4: {
      color: colors.black,
      fontSize: scale(18),
      fontWeight: 'bold',
    },
    h5: {
      color: colors.black,
      fontSize: scale(14),
      fontWeight: 'bold',
    },
    h6: {
      color: colors.black,
      fontSize: scale(10),
      fontWeight: 'bold',
    },
    label: {
      color: colors.black,
      fontSize: scale(14),
      fontWeight: 'bold',
    },
    body: {
      color: colors.black,
      fontSize: scale(14),
    },
    link: {
      fontSize: scale(14),
      color: colors.blue,
      textDecorationLine: 'underline',
    },
  },
  components: {},
  utils: {
    hexToRGBA: (hex: string, opacity: number) => {
      const rgb = hex
        .replace('#', '')
        .split(/(?=(?:..)*$)/)
        .map(x => parseInt(x, 16))
      return `rgba(${rgb.at(0)}, ${rgb.at(1)}, ${rgb.at(2)}, ${opacity})`
    },
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
