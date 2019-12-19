import React, { Component } from 'react';

import * as Redux from 'redux';
import PersonsReducer from './store/reducer';
import * as ReactRedux from 'react-redux';

import Persons from './containers/Persons';
import './App.css';

const reduxStore = Redux.createStore(PersonsReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactRedux.Provider store={reduxStore}>
          <Persons />
        </ReactRedux.Provider>
      </div>
    );
  }
}

export default App;
