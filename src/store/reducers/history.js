import {SET_USER_HISTORY} from '../constants'

export default (state = [], action) => {
  const { payload, type } = action
  switch (type) {
    case SET_USER_HISTORY: {
      const values = [...state]
      values.push(payload)
      return values
    }
    default:
      return state
  }
}
  