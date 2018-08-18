import React, {Component} from 'react';

import {connect} from 'react-redux';

import selector from './state/selector';
import boatSelector from '../state/selector';
import dispatcher from './state/dispatcher';

import './styles.css';

const TIME_DURATION = 1000;

class Sub extends Component {
  componentDidUpdate() {
    document
      .getElementById('sonar-sweep')
      .setAttribute('x2', 50+50*Math.cos(this.props.ui.time/TIME_DURATION*2*Math.PI)*-1);
    document
      .getElementById('sonar-sweep')
      .setAttribute('y2', 50+50*Math.sin(this.props.ui.time/TIME_DURATION*2*Math.PI));
    this.props.ships.forEach((ship, index) => {
      document
        .getElementById(`ship-${index}`)
        .setAttribute('cx', (ship.locX + 1000)/2000*100);
      document
        .getElementById(`ship-${index}`)
        .setAttribute('cy', 100-(ship.locY + 1000)/2000*100);
    });
  }

  handleClick = option => () => {
    this.props.boatInputReceived(option);
  }

  render() {
    return (
      <div className="app--sub sub">
        <section className="sub__sonar">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50"/>
            <circle cx="50" cy="50" r="40"/>
            <circle cx="50" cy="50" r="30"/>
            <circle cx="50" cy="50" r="20"/>
            <circle cx="50" cy="50" r="10"/>
            <line className="sonar__sweep" id="sonar-sweep" x1="50" y1="50" x2="0" y2="0" />
            {this.props.ships.map((ship, index) => (
              <circle key={index} id={`ship-${index}`} cx="-10" cy="-10" r="1" fill="lightgreen" />
            ))}
          </svg>
        </section>
        <section className="sub__stats">
          <h2>Boat</h2>
          <dl>
            <dt>Dir</dt>
            <dd>{this.props.boat.dir}</dd>
            <dt>Speed</dt>
            <dd>{parseInt(this.props.boat.speed*100)}</dd>
          </dl>
        </section>
        <section className="sub__controls">
          <h2>Controls</h2>
          <button id="speed-up" onClick={this.handleClick('speed-up')}>Speed +</button>
          <button id="speed-down" onClick={this.handleClick('speed-down')}>Speed -</button>
          <button id="dir-left" onClick={this.handleClick('dir-left')}>{'Dir <'}</button>
          <button id="dir-right" onClick={this.handleClick('dir-right')}>{'Dir >'}</button>
        </section>
      </div>
    );
  }
}

function metaSelector(state) {
  return {
    ...selector(state),
    ...boatSelector(state),
  }
}

export default connect(metaSelector, dispatcher)(Sub);