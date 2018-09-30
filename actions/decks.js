import C from '../utils/constants'

export function receiveDecks (decks) {
  return {
    type: C.RECEIVE_DECKS,
    decks
  }
}