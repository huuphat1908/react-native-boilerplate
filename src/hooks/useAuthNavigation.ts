import { AuthParamList } from '@/navigators/AuthNavigator'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const useAuthNavigation = () =>
  useNavigation<NativeStackNavigationProp<AuthParamList>>()

export default useAuthNavigation
