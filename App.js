import React, { Component } from 'react';
import { AsyncStorage, View, Image } from 'react-native';
import { connect } from 'react-redux';

import LoginScreen from './src/Modules/Auth/Login/Login';
import Dashboard from './src/Modules/Dashboard/Dashboard';

class App extends Component {
  render() {
    if (this.props.isLoggedIn) {
        return <Dashboard />;
    } else {
        return <LoginScreen />;
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
      isLoggedIn: state.loginReducer.isLoggedIn
  };
}
export default connect(mapStateToProps)(App);