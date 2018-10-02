import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { yellow } from '../utils/colors'

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 65px;
`
const ButtonText = styled.Text`
  font-size: 21px;
  font-weight:bold;
  font-family: 'AmericanTypewriter';
  color: ${yellow};
`

const ButtonPrimary = ({ children, onPress }) => (
  <TouchableOpacity onPress={() => onPress()}>
    <ButtonContainer>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  </TouchableOpacity>
)

export default ButtonPrimary