import { createUnistyles } from 'react-native-unistyles'

import { colors } from '@/constant'

export const theme = {
  colors,
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
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

const styles = createUnistyles<typeof breakpoints, typeof theme>(breakpoints)

export default styles
