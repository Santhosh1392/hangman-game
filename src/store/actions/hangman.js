import {UPDATE_HANGMAN_CURRENT_INDEX} from '../constants'

export const updateHangmanCurrentIndex = (index) => {
  return {
    type: UPDATE_HANGMAN_CURRENT_INDEX,
    payload: index
  }
}
