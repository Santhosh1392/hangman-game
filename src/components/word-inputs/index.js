import React from 'react'
import './word-inputs.scss'

const WordInputs = ({wordLength, correctEntries, word}) => {
  return (
    <div className="word-inputs-container">
      {Array.from({length: wordLength}, (k, index) => {
        const isLetterInWord = correctEntries.indexOf(index) !== -1
        return (
          <div className="word-input" key={`word-input-${index}`}>
            {isLetterInWord ? word[index] : ''}
          </div>
        )
      })}
    </div>
  )
}

export default WordInputs