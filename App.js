import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import reducers from './reducers'
import styled from 'styled-components'
import { blue } from './utils/colors'
import { Font, AppLoading } from 'expo'
import DeckList from './components/DeckList'
import Deck from './components/Deck'

const store = createStore(reducers)

const AppContainer = styled.View`
  flex: 1;
  background: ${blue};
`

const MainNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: blue,
      }
    }
  }
})

export default class App extends React.Component {
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
    const { loading } = this.state

    if (loading === true) {
      return (
        <View>
          <AppLoading />
        </View>
      )
    }

    return (
      <Provider store={store}>
        <AppContainer>
          <View style={{ backgroundColor: blue, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={blue} barStyle='light-content'/>
          </View>
          <MainNavigator />
        </AppContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
