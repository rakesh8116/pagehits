
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default class App extends Component {

    render() {

        const sagaMiddleware = createSagaMiddleware()

        global.reduxStore = createStore(reducer,
          applyMiddleware(sagaMiddleware)
        );
    
 
        return (
          <Provider store={global.reduxStore}>
            <Stack initialRoute={screenName} />
          </Provider>
        );
      }
}