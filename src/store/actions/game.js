import {SET_NEW_WORD, UPDATE_CORRECT_ENTRIES, UPDATE_DISABLED_LETTER_ENTRIES} from '../constants'

export const updateCorrectEntries = (data) => {
  return {
    type: UPDATE_CORRECT_ENTRIES,
    payload: data,
  }
}

export const updateDisabledLetters = (data) => {
  return {
    type: UPDATE_DISABLED_LETTER_ENTRIES,
    payload: data
  }
}

export const setNewWOrd = (data) => {
  return {
    type: SET_NEW_WORD,
    payload: data,
  }
}
