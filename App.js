/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
var t = require('tcomb-form-native');
var http = require('./utils/http');

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  name: t.String,              // a required string
  email: t.String,  // an optional string
  password: t.String,
  rememberMe: t.Boolean        // a boolean
});

var options = {};

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    // 初始状态
    this.state = {};
    this.onLogin = this.onLogin.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Person}
          options={this.state.options}
          value={this.state.value}
        />
        <View style={{flex:1, flexDirection: 'row'}}>
          <TouchableHighlight style={styles.button} onPress={this.onLogin} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.onSignup} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  onLogin() {
    // window.
    var value = this.refs.form.getValue();
    var body = {
      username: value.name,
      password: value.password
    }
    var data = {
      body: body,
      method: 'POST'
    }
    console.log(value);
    if (value) {
      http.httpRequest('/users/login', data);
    }
  }

  onSignup() {

  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'baseline',
    justifyContent: 'center',
    width: 150
  }
});
