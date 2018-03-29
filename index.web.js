import 'babel-polyfill'
import 'fetch-detector'
import 'fetch-ie8'
import {AppRegistry} from 'react-native'
import App from './App'

AppRegistry.registerComponent('reactnativelearning', () => App)

var app = document.createElement('div')
document.body.appendChild(app)

AppRegistry.runApplication('reactnativelearning', {
  rootTag: app
})