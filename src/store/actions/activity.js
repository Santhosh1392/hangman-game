import {SET_USER_ACTIVITY, RESET_USER_ACTIVITY} from '../constants'

export const setUserActivity = (data) => {
  return {
    type: SET_USER_ACTIVITY,
    payload: data
  }
}

export const resetUserActivity = () => {
  return {
    type: RESET_USER_ACTIVITY
  }
}