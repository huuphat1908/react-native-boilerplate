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
  components: {
    h1: {
      fontSize: scale(30),
    },
    h2: {
      fontSize: scale(26),
    },
    h3: {
      fontSize: scale(22),
    },
    h4: {
      fontSize: scale(18),
    },
    h5: {
      fontSize: scale(14),
    },
    h6: {
      fontSize: scale(10),
    },
    label: {
      fontSize: scale(14),
      fontWeight: 'bold',
    },
    link: {
      fontSize: scale(14),
      color: colors.blue,
      textDecorationLine: 'underline',
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
  },
}

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
