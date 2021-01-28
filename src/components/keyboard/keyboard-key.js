import React from 'react'

const KeyboardKey = ({letter, handleOnClick, isDisabled}) => {
  return (
    <button
      className="key-section"
      disabled={isDisabled}
      onClick={handleOnClick}>
      {letter}
    </button>
  )
}

export default KeyboardKey;