import React, { Component } from 'react';
import {connect} from 'react-redux';

import landingSelector from '../landing/state/selector';

import Landing from '../landing/Landing';
import Boat from '../boat/Boat';

import './app.css';

class App extends Component {
  render() {
    const {gameState} = this.props;
    switch(gameState) {
      case 'boat':
        return (
          <Boat />
        );

      case 'pre':
      default:
        return (
          <Landing />
        );
    }
  }
}

export default connect(landingSelector)(App);
