import axios from 'axios'
import { DOMAIN } from './../../../../../../src/constant'
  export const getListEmployeeRole = (params) => {
    return async dispatch => {
      const res = await axios
        .post(`${DOMAIN}/User/List`, params)
      dispatch({
        type: 'GET_LIST_ROLE_EMPLOYEE',
        data: res.data.data
      })
    }
  }