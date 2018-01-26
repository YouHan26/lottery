/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosen: [],
      current: null,
      max: 13
    };

    this.random = this.random.bind(this);
  }

  random() {
    let random = Math.ceil(Math.random() * this.state.max);
    while (this.state.chosen.indexOf(random) !== -1) {
      random = Math.ceil(Math.random() * this.state.max);
    }
    this.setState({
      chosen: [...this.state.chosen, random],
      current: random
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(value) => {
            this.setState({
              max: parseInt(value),
              chosen: [],
              current: null
            });
          }}
          keyboardType={'numeric'}
          value={`${this.state.max}`}
          style={{width: 50, textAlign: 'center'}}
        />
        <Button
          onPress={() => {
            this.random();
          }}
          disabled={this.state.chosen.length >= this.state.max}
          title={'抽奖'}
        />
        <Text style={styles.instructions}>
          当前: {this.state.current}
        </Text>
        <Text style={styles.instructions}>
          历史: {this.state.chosen.join(', ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
