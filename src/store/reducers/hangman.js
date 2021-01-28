import partOne from '../../assets/images/one.png';
import partTwo from '../../assets/images/two.png';
import partThree from '../../assets/images/three.png';
import partFour from '../../assets/images/four.png';
import partFive from '../../assets/images/five.png';
import partSix from '../../assets/images/six.png';
import partSeven from '../../assets/images/seven.png';
import { UPDATE_HANGMAN_CURRENT_INDEX } from '../constants';
const images = [partOne, partTwo, partThree, partFour, partFive, partSix, partSeven]

export default (state = {
  images,
  currentIndex: 0
}, action) => {
  const { payload, type } = action
  switch (type) {
    case UPDATE_HANGMAN_CURRENT_INDEX: {
      return {
        ...state,
        currentIndex: payload,
      }
    }
    default:
      return state
  }
}
    