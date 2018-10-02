import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { blue, darkGray } from '../utils/colors'
import ButtonPrimary from './ButtonPrimary'
import { requestCreateCard } from '../actions'

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${blue}
`
const InputLabel = styled.Text`
  font-size: 16px;
  color: white;
  font-family: 'AmericanTypewriter';
  margin-bottom: 10px;
`
const Input = styled.TextInput`
  margin-bottom: 50px;
  border: 0px;
  padding: 5px;
  font-size: 21px;
  font-family: 'AmericanTypewriter';
  color: ${darkGray};
  background-color: white
`

class NewCard extends Component {
  static navigationOptions = {
    //
  };

  state = {
    question: '',
    answer: ''
  }

  onCreateCard = () => {
    const { question, answer } = this.state
    const { dispatch, navigation, deckKey } = this.props

    // create new deck
    dispatch(requestCreateCard({ deckKey, question, answer }))

    // navigate back to the current deck
    navigation.navigate('Deck', { deckKey })
  }

  render() {
    const { question, answer } = this.state

    return (
      <Container>
        <InputLabel>Question</InputLabel>
        <Input
          onChangeText={(text) => this.setState({question: text})}
          value={question}
        />
        <InputLabel>Answer</InputLabel>
        <Input
          onChangeText={(text) => this.setState({answer: text})}
          value={answer}
        />
        <ButtonPrimary onPress={this.onCreateCard}>Create Card</ButtonPrimary>
      </Container>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  return {
    deckKey: navigation.state.params.deckKey,
  }
}

export default connect(mapStateToProps)(NewCard)