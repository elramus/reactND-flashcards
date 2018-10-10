import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import styled from 'styled-components'
import { boxShadow, darkGray } from '../utils/shared'
import ButtonAlt from './ButtonAlt'

const Card = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 250px;
  margin-bottom: 10px;
  ${boxShadow}
`
const AnimatedCard = Animated.createAnimatedComponent(Card)

const CardText = styled.Text`
  color: ${darkGray};
  font-size: 21px;
  font-family: 'AmericanTypewriter';
`

class FlashCard extends Component {
  state = {
    showingQuestion: 1,
    rotate: new Animated.Value(0),
  }

  onToggleCard = () => {
    const { showingQuestion, rotate } = this.state
    const toValue = showingQuestion ? 180 : 0

    Animated.timing(rotate, {
      toValue,
      duration: 300
    }).start()

    setTimeout(() => {
      this.setState({ showingQuestion: !showingQuestion })
    }, 150)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.question !== this.props.question) {
      this.setState({ showingQuestion: 1 })
      Animated.timing(this.state.rotate, {
        toValue: 0,
        duration: 300
      }).start()
    }
  }

  render() {
    const { showingQuestion, rotate } = this.state
    const { question, answer } = this.props

    return (
      <View>
        <AnimatedCard style={{
          transform: [{
            rotateY: rotate.interpolate({
              inputRange: [0, 180],
              outputRange: ['0deg', '180deg']
            })
          }]
        }}>
          {showingQuestion && (
            <CardText>{question}</CardText>
          )}
          {!showingQuestion && (
            <CardText style={{ transform: [{ rotateY: '-180deg' }]}}>{answer}</CardText>
          )}
        </AnimatedCard>

        <ButtonAlt onPress={this.onToggleCard}>{showingQuestion ? 'Show Answer' : 'Show Question'}</ButtonAlt>
      </View>
    )
  }
}

export default FlashCard

