import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    }
  }
  render() {
    const { deck } = this.props

    return (
      <Text>
        Single deck view
      </Text>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  return {
    deck: decks[navigation.state.params.title],
  }
}

export default connect(mapStateToProps)(Deck)