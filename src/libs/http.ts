import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import Config from 'react-native-config'
import { getGenericPassword, setGenericPassword } from 'react-native-keychain'

import { KeychainService } from '@/constants'

const http = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
  },
})

const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig<any>> => {
  const accessTokenCredentials = await getGenericPassword({
    service: KeychainService.ACCESS_TOKEN,
  })

  if (accessTokenCredentials && config.headers) {
    config.headers.Authorization = `Bearer ${accessTokenCredentials.password}`
  }

  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

http.interceptors.request.use(onRequest, onRequestError)

http.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const originalRequest = error?.config

    // Check if the response status is 401 (unauthorized) and there's no previous retry
    if (error?.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true
      let accessToken = ''
      let refreshToken

      const accessTokenCredentials = await getGenericPassword({
        service: KeychainService.ACCESS_TOKEN,
      })

      if (accessTokenCredentials) {
        accessToken = accessTokenCredentials.password
      }

      const refreshTokenCredentials = await getGenericPassword({
        service: KeychainService.REFRESH_TOKEN,
      })

      if (refreshTokenCredentials) {
        console.log('Access token expired')
        try {
          refreshToken = refreshTokenCredentials.password
          // TODO: Use access and refresh token to retrieve new access and refresh token here
          await setGenericPassword(KeychainService.ACCESS_TOKEN, accessToken, {
            service: KeychainService.ACCESS_TOKEN,
          })
          originalRequest.headers.Authorization = `Bearer ${accessToken}`
          return http(originalRequest)
        } catch (refreshError) {
          console.log('Refresh token expired')
          return Promise.reject(refreshError)
        }
      }
    }

    return Promise.reject(error)
  },
)

export default http
