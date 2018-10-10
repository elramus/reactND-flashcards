import { View } from 'react-native'
import styled, { css } from 'styled-components'

/**
 * COLORS
 */
export const darkGray = '#4A4A4A'
export const middleGray = '#aaa'
export const lightGray = '#eee'
export const offWhite = '#f4f4f4'
export const blue = '#078BAB'
export const yellow = '#FFAB00'

/**
 * STYLES
 */
export const boxShadow = css`
  background-color: white;
  border-radius: 2px;
  shadow-color: black;
  shadow-offset: 0 2px;
  shadow-radius: 2;
  shadow-opacity: .25;
  elevation: 4;
`

/**
 * COMPONENTS
 */
export const OuterContainer = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${blue};
`