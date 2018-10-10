import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { darkGray } from '../utils/shared'

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 65px;
  border-radius: 5px;
  border: 1px solid white;
`
const ButtonText = styled.Text`
  font-size: 21px;
  font-weight:bold;
  font-family: 'AmericanTypewriter';
  color: white;
`

const ButtonAlt = ({ children, onPress }) => (
  <TouchableOpacity onPress={() => onPress()}>
    <ButtonContainer>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  </TouchableOpacity>
)

export default ButtonAlt