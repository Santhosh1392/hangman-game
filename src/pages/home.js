import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import successImage from '../assets/images/check.png'
import cancelImage from '../assets/images/cancel.png'
import './home.scss'

const HomePage = () => {
  const {history} = useSelector(state => {
    return {
      history: state.history
    }
  })

  const getErrorsLength = (data) => {
    const {activity} = data
    let errorLength = 0
    for (let i = 0; i < activity.length; i += 1) {
      const {status} = activity[i]
      if (status) {
        errorLength += 1
      }
    }
    return errorLength
  }

  return (
    <div className='home-container'>
      <div className="content">
        <div className="logo-section">
          <img src={logo} alt="Hangman Logo" className='app-logo' />
          <h4 className="game-heading">
            The Hangman Game
          </h4>
        </div>
        <div className="start-game-button-section">
          <Link to="/game">
            <button>
              Start Game
            </button>
          </Link>
        </div>
        {history && history.length > 0 && (
          <div className="history-section">
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <th>
                    Date
                  </th>
                  <th>
                    Errors
                  </th>
                  <th>
                    Finished
                  </th>
                </tr>
              </thead>
              <tbody>
                {history && history.map((h, index) => {
                  return (
                    <tr key={`table-row-${index}`}>
                      <td>
                        {new Date(h.date).toDateString()}
                      </td>
                      <td>
                        {getErrorsLength(h)}
                      </td>
                      <td>
                        <img src={h.finised ? successImage : cancelImage} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
export default HomePage;
