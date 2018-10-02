import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { Entypo } from '@expo/vector-icons'

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px dashed #fff;
  border-radius: 5px;
`
const ButtonText = styled.Text`
  font-size: 21px;
  font-weight: bold;
  font-family:'AmericanTypewriter';
  color: white;
`

export default ButtonAdd = ({ children, onPress }) => (
  <TouchableOpacity onPress={() => onPress()}>
    <ButtonContainer>
      <ButtonText><Entypo name='plus' size={21} /> {children}</ButtonText>
    </ButtonContainer>
  </TouchableOpacity>
)