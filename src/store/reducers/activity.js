import {SET_USER_ACTIVITY, RESET_USER_ACTIVITY} from '../constants'

export default (state = [], action) => {
  const { payload, type } = action
  switch (type) {
    case SET_USER_ACTIVITY: {
      const values = [...state]
      values.push(payload)
      return values
    }

    case RESET_USER_ACTIVITY: {
      return []
    }
    default:
      return state
  }
}
  