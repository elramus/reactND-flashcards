import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { darkGray, middleGray } from '../utils/colors'

const Container = styled.View`
  height:100;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 2px;
  shadow-color: black;
  shadow-offset: 0 2px;
  shadow-radius: 2;
  shadow-opacity: .25;
  elevation: 4;
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
    const { navigation, deck } = this.props

    navigation.navigate(
      'Deck',
      {
        title: deck.title.split(' ').join('_')
      }
    )
  }

  render() {
    const { deck } = this.props

    return (
      <TouchableOpacity onPress={this.onDeckPress}>
        <Container>
          <DeckTitle>{deck.title.split('_').join(' ')}</DeckTitle>
          <DeckDetails>{deck.questions.length} cards</DeckDetails>
        </Container>
      </TouchableOpacity>
    )
  }
}

export default DeckPreview