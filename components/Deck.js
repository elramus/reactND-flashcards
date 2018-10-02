import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { blue, darkGray } from '../utils/colors'
import ButtonPrimary from './ButtonPrimary'
import ButtonAdd from './ButtonAdd'
import ButtonDelete from './ButtonDelete'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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

  onStartQuizTap = () => {
    alert('start quiz')
  }
  onCardAddTap = () => {
    alert('new card')
  }
  onDeleteDeckTap = () => {
    alert('delete deck')
  }

  render() {
    const { deck } = this.props

    return (
      <Container>
        <DeckTitle>{deck.title}</DeckTitle>
        <CardCount>{deck.questions.length} cards</CardCount>
        <ButtonPrimary onPress={this.onStartQuizTap}>
          <MaterialCommunityIcons name='cards-playing-outline' size={21} color={darkGray} /> Start Quiz!
        </ButtonPrimary>
        <ButtonAdd onPress={this.onCardAddTap}>Add Card</ButtonAdd>
        <ButtonDelete onPress={this.onDeleteDeckTap}>Delete Deck</ButtonDelete>
      </Container>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  return {
    deck: decks[navigation.state.params.key],
  }
}

export default connect(mapStateToProps)(Deck)