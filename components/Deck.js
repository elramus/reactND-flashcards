import React, { Component, Fragment } from 'react'
import { View, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { blue, darkGray } from '../utils/colors'
import ButtonPrimary from './ButtonPrimary'
import ButtonAdd from './ButtonAdd'
import ButtonDelete from './ButtonDelete'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { requestDeleteDeck } from '../actions'

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${blue}
`
const DeckTitle = styled.Text`
  font-size: 32px;
  font-family: 'AmericanTypewriter';
  color: white;
  margin-bottom: 10px;
`
const CardCount = styled.Text`
  font-size: 16px;
  font-family: 'AmericanTypewriter';
  color: white;
  margin-bottom: 50px;
`

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    }
  }

  deleteDeck = () => {
    const { dispatch, navigation, deckKey } = this.props

    dispatch(requestDeleteDeck(deckKey))
    navigation.navigate('Home')
  }

  onStartQuizTap = () => {
    alert('start quiz')
  }

  onCardAddTap = () => {
    const { navigation, deckKey} = this.props
    navigation.navigate('NewCard', { deckKey })
  }

  onDeleteDeckTap = () => {
    Alert.alert('Delete This Deck?', `Are you sure you want to delete ${this.props.deck.title}?`, [
      {text: 'Yes, Delete', onPress: this.deleteDeck},
      {text: 'Cancel'}
    ])
  }

  render() {
    const { deck } = this.props

    return (
      <Container>
        {deck && (
          <Fragment>
            <DeckTitle>{deck.title}</DeckTitle>
            <CardCount>{deck.questions.length} cards</CardCount>
            <ButtonPrimary onPress={this.onStartQuizTap}><MaterialCommunityIcons name='cards-playing-outline' size={21} color={darkGray} /> Start Quiz!</ButtonPrimary>
            <ButtonAdd onPress={this.onCardAddTap}>Add Card</ButtonAdd>
            <ButtonDelete onPress={this.onDeleteDeckTap}>Delete Deck</ButtonDelete>
          </Fragment>
        )}
      </Container>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  return {
    deckKey: navigation.state.params.deckKey,
    deck: decks[navigation.state.params.deckKey],
  }
}

export default connect(mapStateToProps)(Deck)