// export const MY_HOST = 'http://localhost:3004'
export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3000',
  devServerUrl: 'http://localhost:3004',
  prodUrl: 'https://www.seizee.com',
}
export const MY_HOST = appConfig.devServerUrl

// 05-member
export const REGISTER = `${MY_HOST}/user/register`
export const CHECK_USER = `${MY_HOST}/user/checkUser`
export const LOGIN = `${MY_HOST}/user/login`

export const CHECK_FORGOT_PASS = `${MY_HOST}/user/checkForgotPass`
export const SEND_FORGOT_PASS = `${MY_HOST}/user/sendForgotPass`

export const UPDATE_PASS = `${MY_HOST}/user/updatePass`

export const PROFILE = `${MY_HOST}/user/profile`
export const PROFILE_AUTH = `${MY_HOST}/user/updateAuth`

export const DELETE_ACCOUNT = `${MY_HOST}/user/deleteAccount`

export const imgUrl = appConfig.debug ? appConfig.devUrl : appConfig.prodUrl

export const imgServerUrl = appConfig.debug
  ? appConfig.devServerUrl
  : appConfig.prodUrl

// console.log('aaaa:', imgServerUrl)
