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
  View
} from 'react-native';

class CustomKeyboard extends Component {
  render() {
    console.log("Custom Keyboard");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Keyboard!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: '#4345ee',
    height: 150,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    height: 60,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = CustomKeyboard;
