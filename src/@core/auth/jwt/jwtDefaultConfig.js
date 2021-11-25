import {DOMAIN} from './../../../constant'
// ** Auth Endpoints
export default {
  // loginEndpoint: `http://45.118.144.92:8023/api/login`,
  loginEndpoint: `${DOMAIN}/Auth/Login`,
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/jwt/refresh-token',
  logoutEndpoint: '/jwt/logout',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
}
