import React from 'react'
import KeyboardKey from './keyboard-key'
import './keyboard.scss'

const KeyBoardComponent = (props) => {
  const keys = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J',' K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const {handleOnKeyPress, disabledLetters} = props

  const handleOnClick = (letter) => {
    handleOnKeyPress(letter)
  }

  return (
    <div className="key-board-container">
      {keys.map((k, index) => {
        const isDisabled = disabledLetters.indexOf(k) !== -1
        return (
          <KeyboardKey
            handleOnClick={() => handleOnClick(k)}
            letter={k}
            key={`key-info-${index}${k}`}
            isDisabled={isDisabled}
          />
        )
      })}
    </div>
  )
}

export default KeyBoardComponent