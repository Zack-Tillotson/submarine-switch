import types from '../actionTypes';
import subTypes from '../../sub/state/actionTypes';

const initialState = {
  dir: 0, // 0-359, 0 is north
  rudder: 0, // -1 to 1
  speed: 0,
  engine: 0,
};

function boat(state = initialState, action) {
  switch(action.type) {
    case subTypes.boatInputReceived:
      switch(action.payload.type) {
        case 'speed-up':
          return {...state, speed: state.speed + .1};
        case 'speed-down':
          return {...state, speed: state.speed - .1};
        case 'dir-left':
          return {...state, dir: (state.dir - 5 + 360) % 360};
        case 'dir-right':
          return {...state, dir: (state.dir + 5 + 360) % 360};
      }
  }
  return state;
}

export default boat;