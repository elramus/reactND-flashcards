import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { blue } from '../utils/shared'
import ButtonPrimary from './ButtonPrimary'
import FlashCard from './FlashCard'
import { FontAwesome } from '@expo/vector-icons'

const LabelText = styled.Text`
  color: white;
  font-size: 16px;
  font-family: 'AmericanTypewriter';
  margin-bottom: 20px;
`
const QuestionGrader = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-top: 20px;
`
const NoCardsError = styled.Text`
  color: white;
  font-family: 'AmericanTypewriter';
  font-size: 21px;
`
const QuizContainer = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${blue};
`

class Quiz extends Component {
  state = {
    qI: 0,
    tally: 0
  }

  onGrade = (correct) => {
    const { qI } = this.state
    const { deck, navigation } = this.props

    const tally = correct ? this.state.tally + 1 : this.state.tally
    this.setState({ tally })

    // Was this the final card of the quiz?
    if (qI + 1 < deck.questions.length) {
      this.setState(({ qI }) => ({
        qI: qI + 1,
      }))
    } else {
      navigation.navigate('QuizResults', {
        tally,
        deckKey: navigation.state.params.deckKey
      })
    }
  }

  render() {
    const { qI } = this.state
    const { deck } = this.props

    if (deck.questions.length === 0) {
      return (
        <OuterContainer>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <NoCardsError>Kinda hard to quiz you on this deck's cards when there aren't any cards, eh?</NoCardsError>
          </View>
        </OuterContainer>
      )
    }

    return (
      <QuizContainer>
        <LabelText>Question {qI + 1} of {deck.questions.length}</LabelText>
        <FlashCard
          question={deck.questions[qI].question}
          answer={deck.questions[qI].answer}
        />
        <QuestionGrader>
          <LabelText>I got this question:</LabelText>
          <ButtonPrimary onPress={() => this.onGrade(true)}><FontAwesome name='check' size={21} /> Correct</ButtonPrimary>
          <ButtonPrimary onPress={() => this.onGrade(false)}><FontAwesome name='times' size={21} /> Incorrect</ButtonPrimary>
        </QuestionGrader>
      </QuizContainer>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckKey]
  }
}

export default connect(mapStateToProps)(Quiz)