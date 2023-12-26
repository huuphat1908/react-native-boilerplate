import React, { useCallback } from 'react'
import { FormProvider } from 'react-hook-form'
import { Image } from 'react-native'

import {
  Box,
  Center,
  H2,
  InputField,
  KeyboardAvoidingView,
  Label,
  PrimaryButton,
  TouchableKeyboardDismiss,
} from '@/components'
import { useKeyboard } from '@/hooks'
import { styleManager } from '@/libs'
import { useApplicationSetting } from '@/store'

import { LoginFormData } from './loginFormSchema'
import { stylesheet } from './LoginScreen.style'
import { useLoginForm } from './useLoginForm'

const LoginScreen = () => {
  const formMethods = useLoginForm()
  const login = useApplicationSetting(state => state.login)
  const { styles } = styleManager.useStyles(stylesheet)
  const { isKeyboardVisible } = useKeyboard()

  const onSubmit = useCallback(
    (values: LoginFormData) => {
      console.log(values)
      login()
    },
    [login],
  )

  return (
    <FormProvider {...formMethods}>
      <KeyboardAvoidingView>
        <TouchableKeyboardDismiss>
          <Box style={styles.container}>
            <Center style={styles.brandingWrapper}>
              <Image
                style={styles.logo}
                source={require('@/assets/images/logo.png')}
              />
              <H2>RN Boilerplate</H2>
            </Center>

            <Box style={styles.formWrapper}>
              <Box style={styles.formGroupWrapper}>
                <Label>Email</Label>
                <InputField name="email" placeholder="Email" />
              </Box>

              <Box style={styles.formGroupWrapper}>
                <Label>Password</Label>
                <InputField
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                />
              </Box>
            </Box>

            <Box
              style={[
                styles.loginButtonWrapper,
                isKeyboardVisible && { justifyContent: 'flex-start' },
              ]}>
              <PrimaryButton
                onPress={formMethods.handleSubmit(values => onSubmit(values))}>
                Login
              </PrimaryButton>
            </Box>
          </Box>
        </TouchableKeyboardDismiss>
      </KeyboardAvoidingView>
    </FormProvider>
  )
}

export default LoginScreen
