/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const CustomKeyboard = require('./CustomKeys');

class ReactAGKeyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "getting started",
      loaded: false,
    };
  }
  onSearchTextChanged(event) {
    console.log("Text Changed");
    this.setState({ inputText: event.nativeEvent.text });
    console.log(this.state.inputText);
  }
  render() {
    console.log("Renduer");
    return (
      <View style={styles.container}>
      <TextInput
          style={styles.input}
          value={this.state.inputText}
          onChange={this.onSearchTextChanged.bind(this)}
        />
        <Text style={styles.welcome}>
          Hey, Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 150,
    borderRadius: 4,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('ReactAGKeyboard', () => ReactAGKeyboard);
