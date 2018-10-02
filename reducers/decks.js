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