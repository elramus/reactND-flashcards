import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'MobileFlashcards:storage'

const api = {
  getDecks: () => {
    return AsyncStorage.getItem(STORAGE_KEY)
      .then(res => {
        return res
      })
  },

  saveNewDeck: (deck) => {
    return AsyncStorage.getItem(STORAGE_KEY)
      .then(prevState => {
        const newState = {
          ...JSON.parse(prevState),
          ...deck
        }
        return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
      })
  },

  addCardToDeck: ({ deckKey, question, answer }) => {
    return AsyncStorage.getItem(STORAGE_KEY)
      .then(res => {
        const prevState = JSON.parse(res)
        const newState = {
          ...prevState,
          [deckKey]: {
            ...prevState[deckKey],
            questions: [
              ...prevState[deckKey].questions,
              {
                question,
                answer
              }
            ]
          }
        }
        return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
      })
  },

  deleteDeck: (deckKey) => {
    return AsyncStorage.getItem(STORAGE_KEY)
      .then(prevState => {
        const newState = { ...JSON.parse(prevState) }
        delete newState[deckKey]
        return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
      })
  },

  clearAllDecks: () => {
    return AsyncStorage.removeItem(STORAGE_KEY)
  }
}

export default api

