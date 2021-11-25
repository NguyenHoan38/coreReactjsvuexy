import axios from 'axios'
import { DOMAIN } from './../../../../../../src/constant'
export const getListMaintenance = (params) => {
  return async dispatch => {
    const res = await axios
      .post(`${DOMAIN}/MaintenanceWinDow/search`, params)
    dispatch({
      type: 'GET_LIST_MAINTENANCE',
      data: res.data.data
    })
  }
}
export const getMaintenanceById = (id) => {
  return async dispatch => {
    const res = await axios
      .get(`${DOMAIN}/MaintenanceWinDow/GetById/${id}`)
    dispatch({
      type: 'GET_MAINTENANCE_BY_ID',
      data: res.data.data
    })
  }
}
export const getLisRoleByID = (id) => {
  return async dispatch => {
    const res = await axios
      .get(`${DOMAIN}/User/GetRole?roleId=${id}`)
    dispatch({
      type: 'GET_LIST_ROLE_BY_ID',
      data: res.data.data
    })
  }
}
export const getLisRolePermissions = (id) => {
  return async dispatch => {
    const res = await axios
      .get(`${DOMAIN}/User/ListAllPermissions`)
    dispatch({
      type: 'GET_LIST_ROLE_PERMISSIONS',
      data: res.data.data
    })
  }
}

export const getListListRoles = (pramListRoles) => {
  return async dispatch => {
    const res = await axios
      .post(`${DOMAIN}/User/ListRoles`, pramListRoles)
    dispatch({
      type: 'GET_LIST_ROLE',
      data: res.data.data
    })
  }
}
export const getListMultiAuthenticatorSettings = () => {
  return async dispatch => {
    const res = await axios
      .get(`${DOMAIN}/MultiAuthenticatorSettings/GetListMultiAuthenticatorSettings`)
    dispatch({
      type: 'GET_LIST_AUTHENTICAON',
      data: res.data.data
    })
  }
}
export const updateMultiAuthenticatorSettings = (param) => {
  return async dispatch => {
    const res = await axios
      .post(`${DOMAIN}/MultiAuthenticatorSettings/Update`, param)
    return res
  }
}

export const getListWinDowType = () => {
  return async dispatch => {
    const res = await axios
      .get(`${DOMAIN}/MaintenanceWinDow/GetListWinDowType`)
    dispatch({
      type: 'GET_LIST_WINDOW_TYPE',
      data: res.data.data
    })
  }
}

export const createMaintenanceWinDow = params => {
  return async dispatch => {
    const res = await axios
      .post(`${DOMAIN}/MaintenanceWinDow/Create`, params)
    return res
  }
}
export const updateMaintenanceWinDow = params => {
  return async dispatch => {
    const res = await axios
      .post(`${DOMAIN}/MaintenanceWinDow/Update`, params)
    return res
  }
}

