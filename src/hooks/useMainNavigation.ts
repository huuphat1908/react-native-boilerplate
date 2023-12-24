import { MainParamList } from '@/navigators/MainNavigator'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'

const useMainNavigation = () =>
  useNavigation<DrawerNavigationProp<MainParamList>>()

export default useMainNavigation
