import C from '../utils/constants'

export default function decks (state = {}, action) {
  switch (action.type) {
    case C.RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case C.RECEIVE_CARD:
      return {
        ...state,
        [action.deckKey]: {
          ...state[action.deckKey],
          questions: [
            ...state[action.deckKey].questions,
            {
              question: action.question,
              answer: action.answer
            }
          ]
        }
      }
    case C.DELETE_DECK:
      var updatedState = { ...state }
      delete updatedState[action.deckKey]
      return updatedState
    default:
      return state
  }
}