import React from 'react';
import {connect} from 'react-redux';

import dispatcher from './state/dispatcher';

function Landing ({gameStarted}) {

  const handleClick = event => {
    gameStarted();
  };

  return (
    <header className="app__header">
      <h1 className="app__title">Submarine Switch</h1>
      <button onClick={handleClick}>Start Game</button>
    </header>
  );
}

export default connect(null, dispatcher)(Landing);