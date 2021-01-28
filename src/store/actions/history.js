import {SET_USER_HISTORY} from '../constants'

export const setUserActivityHistory = (data) => {
  return {
    type: SET_USER_HISTORY,
    payload: data
  }
}
