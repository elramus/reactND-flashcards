import C from '../utils/constants'

const initialDecks = {
  DeckNameHere: {
    title: 'DeckNameHere',
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
  AnotherDeckName: {
    title: 'AnotherDeckName',
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