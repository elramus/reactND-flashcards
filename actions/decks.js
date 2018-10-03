import C from '../utils/constants'
import api from '../utils/api'
import { formatDeckFromTitle } from '../utils/helpers'

/* ACTION CREATORS*/
export function receiveDecks (decks) {
  return {
    type: C.RECEIVE_DECKS,
    decks
  }
}
export function receiveCard ({ deckKey, question, answer }) {
  return {
    type: C.RECEIVE_CARD,
    deckKey, question, answer
  }
}
export function deleteDeck (deckKey) {
  return {
    type: C.DELETE_DECK,
    deckKey
  }
}

/* THUNKS */
export function requestDecks () {
  return (dispatch) => {
    api.getDecks()
      .then(decks => {
        dispatch(receiveDecks(JSON.parse(decks)))
      })
  }
}
export function requestCreateDeck (title) {
  return (dispatch) => {
    // first format it
    const deck = formatDeckFromTitle(title)
    // then optimistically save in store
    dispatch(receiveDecks(deck))
    // finally, save to DB
    api.saveNewDeck(deck)
  }
}
export function requestCreateCard ({ deckKey, question, answer }) {
  return (dispatch) => {
    // optimistically save in the store
    dispatch(receiveCard({ deckKey, question, answer }))
    // now save in the DB
    api.addCardToDeck({ deckKey, question, answer })
  }
}
export function requestDeleteDeck (deckKey) {
  return (dispatch) => {
    // optimistically delete from store
    dispatch(deleteDeck(deckKey))
    // now delete from DB
    api.deleteDeck(deckKey)
  }
}