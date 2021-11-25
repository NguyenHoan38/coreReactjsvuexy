import axios from "axios"
import _isNil from "lodash/isNil"
import { DOMAIN } from "@/core/constants/constants"
import { ApiLayLaiToken } from "./endpoints"

const buildQueries = (params) => {
  let requestString = ""
  Object.keys(params).forEach((key) => {
    if (!_isNil(params[key]) && params[key] !== "") {
      requestString += `${key}=${params[key]}&`
    }
  })
  return requestString
}

// function callApiLayLaiToken() {
//   return axios.post(ApiLayLaiToken, {
//     refreshToken: localStorage.getItem(LOCAL_STORAGE_KEY.REFRESH_TOKEN),
//     tokenHienTai: localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
//   })
// }

const HTTP = axios.create({
  baseURL: `${DOMAIN}`,
  headers: {
    Token: `${localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)}`,
    "Access-Control-Allow-Origin": "*",
    "Current-Page-Url": window.location.href
  }
})

// Response interceptor for API calls (By: Tran Toan)
HTTP.interceptors.response.use(
  (response) => {
    localStorage.setItem("api-version-be", response.headers["api-version"])
    if (response.status === 200) {
      return response
    }
    if (response.status === 203) {
      localStorage.clear()
      const currentRoutePath = router.currentRoute.path
      router.push(`/dang-nhap?returnUrl=${currentRoutePath}&status=203`)
    }
  },
//   function(error) {
//     if (error && error.response && error.response.status === 406) {
//       if (!error.config.url.includes(ApiLayLaiToken)) {
//         callApiLayLaiToken()
//           .then((res) => {
//             localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, res.data["LayLaiTokenMoiResult"]["Message"])
//             const config = error.config
//             config.headers["Token"] = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
//             return new Promise((resolve, reject) => {
//               axios
//                 .request(config)
//                 .then((response) => resolve(response))
//                 .catch((error) => reject(error))
//             })
//           })
//           .catch((err) => {
//             if (err && err.response.status === 406) {
//               const myOPT = localStorage.getItem('otp')
//               const old_url_redirect = localStorage.getItem('old_url_redirect')
//               localStorage.clear()
//               if (myOPT) localStorage.setItem('otp', myOPT)
//               if (old_url_redirect) localStorage.setItem('old_url_redirect', old_url_redirect)
//               router.push("/dang-nhap")
//             }
//           })
//       }
//     }
//     return new Promise((resolve, reject) => {
//       reject(error)
//     })
//   }
)

export { buildQueries, HTTP }
