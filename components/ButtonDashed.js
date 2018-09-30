import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'


const DashedOutline = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px dashed #fff;
  border-radius: 2px;
`
const ButtonText = styled.Text`
  font-family:'AmericanTypewriter';
  font-size: 16px;
  color: white;
`

export default ButtonDashed = ({ children }) => (
  <DashedOutline>
    <ButtonText>{children}</ButtonText>
  </DashedOutline>
)