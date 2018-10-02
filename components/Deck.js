import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { blue } from '../utils/colors'

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
`

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title.split('_').join(' ')
    }
  }

  render() {
    const { deck } = this.props
    console.log(deck)

    return (
      <Container>
        <DeckTitle>{deck.title.split('_').join(' ')}</DeckTitle>
        <CardCount>{deck.questions.length} cards</CardCount>
      </Container>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  return {
    deck: decks[navigation.state.params.title],
  }
}

export default connect(mapStateToProps)(Deck)