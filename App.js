import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import reducers from './reducers'
import styled from 'styled-components'
import { blue } from './utils/colors'
import { Font, AppLoading } from 'expo'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import middleware from './middleware'

const store = createStore(reducers, middleware)

const AppContainer = styled.View`
  flex: 1;
  background: ${blue};
`

const defaultNavigationOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: blue,
    shadowColor: 'transparent',
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    elevation: 0,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    fontFamily: 'AmericanTypewriter',
  }
}

const MainNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: defaultNavigationOptions
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: defaultNavigationOptions
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: defaultNavigationOptions
  }
})

export default class App extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    Font.loadAsync({
      'AmericanTypewriter': require('./assets/fonts/AmericanTypewriter-Regular.ttf'),
      'AmericanTypewriter-Bold': require('./assets/fonts/AmericanTypewriter-Bold.ttf')
    })
    .then(() => {
      this.setState({ loading: false })
    })
  }

  render() {
    if (this.state.loading === true) {
      return (
        <View style={{flex: 1}}>
          <AppLoading />
        </View>
      )
    }

    return (
      <Provider store={store}>
        <AppContainer>
          <MainNavigator />
        </AppContainer>
      </Provider>
    );
  }
}
