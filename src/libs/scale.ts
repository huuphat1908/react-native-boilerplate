import { moderateScale } from 'react-native-size-matters'

const SCALE_FACTOR = 0.5

const scale = (size: number) => moderateScale(size, SCALE_FACTOR)

export default scale
