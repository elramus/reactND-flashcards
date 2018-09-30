import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { blue } from '../utils/colors'
import DeckPreview from './DeckPreview'
import ButtonDashed from './ButtonDashed'
import { Entypo } from '@expo/vector-icons'

const Container = styled.View`
  flex: 1;
  background-color: ${blue};
  padding: 20px;
`
const MainTitle = styled.Text`
  margin-bottom: 30px;
  text-align: center;
  color: #fff;
  font-size: 21px;
  font-family: 'AmericanTypewriter-Bold';
`

class DeckList extends Component {
  render() {
    const { decks, navigation } = this.props

    return (
      <Container>
        <MainTitle>Mobile Flashcards</MainTitle>
        {Object.keys(decks).map(deck => (
          <DeckPreview key={deck} deck={decks[deck]} navigation={navigation} />
        ))}
        <TouchableOpacity>
          <ButtonDashed><Entypo name='plus' /> New Deck</ButtonDashed>
        </TouchableOpacity>
      </Container>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  return {
    decks,
    navigation
  }
}

export default connect(mapStateToProps)(DeckList)