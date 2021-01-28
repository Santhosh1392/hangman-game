import { combineReducers } from 'redux'
import game from './game'
import activity from './activity'
import hangman from './hangman'
import history from './history'

export default combineReducers({
  game,
  activity,
  hangman,
  history,
})
