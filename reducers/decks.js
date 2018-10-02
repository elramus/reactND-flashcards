import C from '../utils/constants'

const initialDecks = {
  Dog_Breeds: {
    title: 'Dog_Breeds',
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
  Italian_Phrases: {
    title: 'Italian_Phrases',
    questions: [
      {
        question: 'foo',
        answer: 'bar'
      }
    ]
  }
}

export default function decks (state = initialDecks, action) {
  switch (action.type) {
    case C.RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    default:
      return state
  }
}