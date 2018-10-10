import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ButtonAlt from './ButtonAlt'
import ButtonPrimary from './ButtonPrimary'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { OuterContainer, blue, darkGray } from '../utils/shared'
import { Constants } from 'expo'
import { StackActions, NavigationActions } from 'react-navigation'

const P = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'AmericanTypewriter'
`
const Trophy = styled.View`
  margin-bottom: 20px;
`
const ResultsContainer = styled.View`
  margin-top: 50px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
`
const Result = styled(P)`
  font-size: 32px;
`

class QuizResults extends Component {
  onRetakeQuiz = () => {
    const resetAction = StackActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({
          routeName: 'Deck',
          params: {
            title: this.props.deck.title,
            deckKey: this.props.navigation.state.params.deckKey
          }
        }),
        NavigationActions.navigate({
          routeName: 'Quiz',
          params: {
            deckKey: this.props.navigation.state.params.deckKey
          }
        })
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  onBackToDecks = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    const { tally } = this.props.navigation.state.params
    const { deck } = this.props

    return (
      <OuterContainer>
        <View style={{ backgroundColor: blue, height: Constants.statusBarHeight }}>
          <StatusBar translucent backgroundColor={blue} barStyle='light-content'/>
        </View>
        <ResultsContainer>
          <Trophy>
            <FontAwesome name='trophy' size={48} color='#fff' />
          </Trophy>
          <P>You got:</P>
          <Result>{tally} out of {deck.questions.length}</Result>
          <P>correct</P>
        </ResultsContainer>
        <ButtonAlt onPress={this.onRetakeQuiz}><FontAwesome name='refresh' size={21} color='#fff' /> Retake Quiz</ButtonAlt>
        <ButtonPrimary onPress={this.onBackToDecks}><MaterialCommunityIcons name='arrow-left' size={21} color={darkGray} /> Back to Decks</ButtonPrimary>
      </OuterContainer>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckKey]
  }
}

export default connect(mapStateToProps)(QuizResults)