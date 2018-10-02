import C from '../utils/constants'
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
export function requestCreateDeck (title) {
  return (dispatch) => {
    // first format it here
    const deck = formatDeckFromTitle(title)

    // optimistically save in store
    dispatch(receiveDecks(deck))

    // save to DB
  }
}
export function requestCreateCard ({ deckKey, question, answer }) {
  return (dispatch) => {
    // optimistically save in the store
    dispatch(receiveCard({ deckKey, question, answer }))

    // save in the db
  }
}
export function requestDeleteDeck (deckKey) {
  return (dispatch) => {
    // optimistically delete from store
    dispatch(deleteDeck(deckKey))

    // delete from DB
  }
}