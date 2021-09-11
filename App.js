import * as React from 'react';
import { View, Text } from 'react-native';
import StartScreen from './Screens/StartScreen'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StartScreen/>
      </View>
    );
  }
}
