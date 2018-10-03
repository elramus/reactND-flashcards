import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StatusBar, AppLoading } from 'react-native'
import styled from 'styled-components'
import { blue } from '../utils/colors'
import DeckPreview from './DeckPreview'
import ButtonAdd from './ButtonAdd'
import { Constants } from 'expo'
import { requestDecks } from '../actions'

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
const NoDeckText = styled.Text`
  font-size: 21px;
  color: white;
  font-family: 'AmericanTypewriter';
  opacity: .75;
  margin-bottom: 50px;
  text-align: center;
`

class DeckList extends Component {
  state = {
    loading: true
  }

  onNewDeckPress = () => {
    this.props.navigation.navigate('NewDeck')
  }

  componentDidMount() {
    this.props.dispatch(requestDecks())
  }

  render() {
    const { decks, navigation } = this.props

    return (
      <Container>
        <View style={{ backgroundColor: blue, height: Constants.statusBarHeight }}>
          <StatusBar translucent backgroundColor={blue} barStyle='light-content'/>
        </View>
        <MainTitle>Mobile Flashcards</MainTitle>
        {Object.keys(decks).length === 0 && (
          <NoDeckText>Create a deck to get started!</NoDeckText>
        )}
        {Object.keys(decks).map(deck => (
          <DeckPreview key={deck} deckKey={deck} navigation={navigation} />
        ))}
        <ButtonAdd onPress={this.onNewDeckPress}>New Deck</ButtonAdd>
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