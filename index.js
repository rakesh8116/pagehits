import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './App';
import store from './src/Redux/Store';

const action = type => store.dispatch({type})

export default class pagehits extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('pagehits', () => pagehits);
