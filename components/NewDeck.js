import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { blue, darkGray } from '../utils/shared'
import ButtonPrimary from './ButtonPrimary'
import { requestCreateDeck } from '../actions'

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${blue}
`
const DeckNameLabel = styled.Text`
  font-size: 16px;
  color: white;
  font-family: 'AmericanTypewriter';
  margin-bottom: 10px;
`
const DeckNameInput = styled.TextInput`
  margin-bottom: 50px;
  border: 0px;
  padding: 5px;
  font-size: 21px;
  font-family: 'AmericanTypewriter';
  color: ${darkGray};
  background-color: white
`

class NewDeck extends Component {
  static navigationOptions = {
    title: 'New Deck',
  };

  state = {
    deckNameInput: ''
  }

  onCreateDeckTap = () => {
    const { deckNameInput } = this.state
    const { dispatch, navigation } = this.props

    // create new deck
    dispatch(requestCreateDeck(deckNameInput))

    // navigate back to home
    navigation.navigate('Home')
  }

  render() {
    return (
      <Container>
        <DeckNameLabel>Deck Name</DeckNameLabel>
        <DeckNameInput
          onChangeText={(text) => this.setState({deckNameInput: text})}
          value={this.state.deckNameInput}
          autoFocus={true}
        />
        <ButtonPrimary onPress={this.onCreateDeckTap}>Create Deck</ButtonPrimary>
      </Container>
    )
  }
}

export default connect()(NewDeck)