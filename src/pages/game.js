import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Modal from 'react-modal'
import {KeyBoard, WordInputs} from '../components'
import timerImage from '../assets/images/timer.png'
import newWordImage from '../assets/images/new-word.png'
import { resetUserActivity, setUserActivity } from '../store/actions/activity'
import { setNewWOrd, updateCorrectEntries, updateDisabledLetters } from '../store/actions/game'
import { updateHangmanCurrentIndex } from '../store/actions/hangman'
import { getAllIndexsOfLetterInString, words } from '../utils'
import './game.scss'
import { setUserActivityHistory } from '../store/actions/history'

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
const GamePage = () => {
  const dispatch = useDispatch()
  const {gameData, hangman, activity} = useSelector(
    state => ({
      gameData: state.game,
      hangman: state.hangman,
      activity: state.activity
    })
  );
  const {images, currentIndex} = hangman;
  const {word, wordLength, correctEntries, disabledLetters} = gameData
  
  const [showWinner, setShowWinner] = useState(false)
  const [showGameOver, setShowGameOver] = useState(false)
  const [timer, setTimer] = useState(100)
  let timerTimeOut;

  useEffect(() => {
    timerTimeOut = setTimeout(() => {
      setTimer(timer - 1)
    }, 1000)

    if (timer === 0) {
      clearTimeout(timerTimeOut)
      setShowGameOver(true)
    }

    return () => {
      clearTimeout(timerTimeOut)
    }
  }, [timer])

  const handleOnKeyPress = (letter) => {
    const isWordContainsLetter = word.indexOf(letter) !== -1
    if (isWordContainsLetter) {
      const allIndexes = getAllIndexsOfLetterInString(word, letter);
      const newEntries = [...correctEntries, ...allIndexes]
      dispatch(updateCorrectEntries(newEntries))
      if (newEntries.length === wordLength) {
        setShowWinner(true)
        clearTimeout(timerTimeOut)
        dispatch(setUserActivityHistory({
          activity,
          finised: true,
          timeTaken: 100 - timer,
          word,
          wordLength,
          date: new Date()
        }))
      }
      const newDisabledLetters = [...disabledLetters, letter]
      dispatch(updateDisabledLetters(newDisabledLetters))
    } else {
      if (currentIndex + 1 === 6) {
        clearTimeout(timerTimeOut)
        setShowGameOver(true)
      }
      dispatch(updateHangmanCurrentIndex(currentIndex + 1))
    }
    const activityData = {
      letter,
      status: isWordContainsLetter
    }
    dispatch(setUserActivity(activityData))
  }

  const handleOnTryAgain = () => {
    setShowGameOver(false)
    setTimer(100)
    dispatch(updateCorrectEntries([]))
    dispatch(updateDisabledLetters([]))
    dispatch(resetUserActivity())
    dispatch(updateHangmanCurrentIndex(0))
  }

  const generateNewWord = () => {
    const wordIndex = Math.floor(Math.random() * 300) + 1
    const newWord = words[wordIndex]
    dispatch(setNewWOrd(newWord.toUpperCase()))
    setShowGameOver(false)
    setShowWinner(false)
    setTimer(100)
    dispatch(resetUserActivity())
    dispatch(updateCorrectEntries([]))
    dispatch(updateDisabledLetters([]))
    dispatch(updateHangmanCurrentIndex(0))
  }

  return (
    <div className="game-page-container">
      <div className="top-section">
        <div className="timer-section">
          <img src={timerImage} />
          <p>
            {timer}
          </p>
        </div>
        <div onClick={generateNewWord} className="new-word-section">
          <img src={newWordImage} />
          <p>
            New Word
          </p>
        </div>
      </div>
      <div className="hangman-image-section">
        <img src={images[currentIndex]} />
      </div>
      <div className="word-input-sections">
        <WordInputs
          correctEntries={correctEntries}
          wordLength={wordLength}
          word={word}
        />
      </div>
      <div className="game-keyboard-section">
        <KeyBoard
          handleOnKeyPress={handleOnKeyPress}
          disabledLetters={disabledLetters}
        />
      </div>
      {showGameOver && (
        <Modal
          isOpen={showGameOver}
          onRequestClose={() => setShowGameOver(false)}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
        >
          <div className="game-over-popup-section">
            <p>
              Never Mind
            </p>
            <h4 className="heading">
              Game Over!
            </h4>
            <button onClick={handleOnTryAgain}>
              Try Again
            </button>
          </div>
        </Modal>
      )}
      {showWinner && (
        <Modal
          isOpen={showWinner}
          onRequestClose={() => setShowWinner(false)}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
        >
          <div className="winner-popup-section">
            <p>
              WINNER
            </p>
            <h4 className="heading">
              You did it!
            </h4>
            <button onClick={generateNewWord}>
              Next Word
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default GamePage