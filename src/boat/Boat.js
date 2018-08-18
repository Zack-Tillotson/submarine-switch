import React, {Component} from 'react';

import {connect} from 'react-redux';

import selector from './state/selector';
import dispatcher from './state/dispatcher';

import Sub from './sub';
import Surface from './surface';

class Boat extends Component {
  componentDidMount() {
    this.manageLayoutListener(true);
    this.manageTimeInterval(true);
  }

  componentWillUnmount() {
    this.manageLayoutListener(false);
    this.manageTimeInterval(false);
  }

  manageLayoutListener(shouldAdd) {
    window.removeEventListener('orientationchange', this.handleOrientationChange);
    if(shouldAdd) {
      window.addEventListener('orientationchange', this.handleOrientationChange);
      this.handleOrientationChange();
    }
  }

  manageTimeInterval(shouldAdd) {
    clearInterval(this.timeInterval);
    if(shouldAdd) {
      this.timeInterval = setInterval(this.handleTimeInterval, 10);
    }
  }

  handleOrientationChange = event => {
    if(window.screen.orientation) {
      this.props.orientationChanged(window.screen.orientation.type);
    }
  }

  handleTimeInterval = event => {
    this.props.startIncrementTime();
  }

  render() {
    switch(this.props.ui.level) {
      case 'sub': return <Sub />;
      case 'surface': return <Surface />;
    }
  }
}

export default connect(selector, dispatcher)(Boat);