import { SET_NEW_WORD, UPDATE_CORRECT_ENTRIES, UPDATE_DISABLED_LETTER_ENTRIES } from "../constants"

export default (state = {
  word: 'HELLO',
  wordLength: 5,
  correctEntries: [],
  disabledLetters: [],
}, action) => {
  const { payload, type } = action
  switch (type) {
    case UPDATE_CORRECT_ENTRIES: {
      return {
        ...state,
        correctEntries: [...payload]
      }
    }

    case UPDATE_DISABLED_LETTER_ENTRIES: {
      return {
        ...state,
        disabledLetters: [...payload]
      }
    }

    case SET_NEW_WORD: {
      return {
        ...state,
        word: payload,
        wordLength: payload.length,
      }
    }
    default:
      return state
  }
}
    