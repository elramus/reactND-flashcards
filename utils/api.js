import { AsyncStorage } from 'react-native'

const appKey = 'MobileFlashcards'

const api = {
  getDecks: () => {
    return AsyncStorage.getItem(appKey)
      .then(res => {
        return res
      })
  },

  getDeck: (deckKey) => {

  },

  saveNewDeck: (deck) => {
    return AsyncStorage.getItem(appKey)
      .then(prevState => {
        const newState = {
          ...JSON.parse(prevState),
          ...deck
        }
        return AsyncStorage.setItem(appKey, JSON.stringify(newState))
      })
  },

  addCardToDeck: ({ deckKey, question, answer }) => {
    return AsyncStorage.getItem(appKey)
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
        return AsyncStorage.setItem(appKey, JSON.stringify(newState))
      })
  },

  deleteDeck: (deckKey) => {
    return AsyncStorage.getItem(appKey)
      .then(prevState => {
        const newState = { ...JSON.parse(prevState) }
        delete newState[deckKey]
        return AsyncStorage.setItem(appKey, JSON.stringify(newState))
      })
  },

  clearAllDecks: () => {
    return AsyncStorage.removeItem(appKey)
  }
}

export default api

