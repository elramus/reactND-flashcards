import C from '../utils/constants'

const initialDecks = {
  DogBreeds: {
    title: 'Dog Breeds',
    questions: [
      {
        question: 'what color is the sky',
        answer: 'blue'
      },
      {
        question: 'bla bla bla',
        answer: 'yeah'
      }
    ]
  },
  ItalianPhrases: {
    title: 'Italian Phrases',
    questions: [
      {
        question: 'foo',
        answer: 'bar'
      }
    ]
  }
}

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