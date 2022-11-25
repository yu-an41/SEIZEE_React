// export const MY_HOST = 'http://localhost:3004'
export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3000',
  devServerUrl: 'http://localhost:3004',
  prodUrl: 'https://www.seizee.com',
}
export const MY_HOST = appConfig.devServerUrl

// 04-product
export const PRODUCT = `{MY_HOST}/product`

// 05-member
export const REGISTER = `${MY_HOST}/user/register`
export const CHECK_USER = `${MY_HOST}/user/checkUser`
export const LOGIN = `${MY_HOST}/user/login`
export const FORGOT_PASS = `${MY_HOST}/user/forgotPass`
export const UPDATE_PASS = `${MY_HOST}/user/updatePass`
export const PROFILE = `${MY_HOST}/user/profile/`
export const DELETE_ACCOUNT = `${MY_HOST}/user/deleteAccount/:sid`

export const imgUrl = appConfig.debug ? appConfig.devUrl : appConfig.prodUrl

export const imgServerUrl = appConfig.debug
  ? appConfig.devServerUrl
  : appConfig.prodUrl

// console.log('aaaa:', imgServerUrl)
