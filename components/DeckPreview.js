import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { darkGray, middleGray } from '../utils/shared'
import { boxShadow } from '../utils/shared'

const Container = styled.View`
  height:100;
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px;
  ${boxShadow}
`
const DeckTitle = styled.Text`
  font-family: 'AmericanTypewriter';
  font-size: 21px;
  color: ${darkGray};
`
const DeckDetails = styled.Text`
  font-family: 'AmericanTypewriter';
  font-size: 16px;
  color: ${middleGray};
`

class DeckPreview extends Component {
  onDeckPress = () => {
    const { deckKey, deck, navigation } = this.props

    navigation.navigate('Deck', {
      deckKey,
      title: deck.title
    })
  }

  render() {
    const { deck } = this.props

    return (
      <TouchableOpacity onPress={this.onDeckPress}>
        <Container>
          <DeckTitle>{deck.title}</DeckTitle>
          <DeckDetails>{deck.questions.length} card{deck.questions.length !==  1 && 's'}</DeckDetails>
        </Container>
      </TouchableOpacity>
    )
  }
}

function mapStateToProps({ decks }, { deckKey }) {
  return {
    deck: decks[deckKey]
  }
}

export default connect(mapStateToProps)(DeckPreview)