import types from '../actionTypes';

const initialState = {
  level: 'sub',
  time: 0,
};

function ui(state = initialState, action) {
  switch(action.type) {
    case types.orientationChanged: {
      const {orientation} = action.payload;
      return {
        ...state,
        level: orientation.indexOf('portrait') === 0 ? 'surface' : 'sub',
      }
    }
    case types.timeIncremented: {
      return {
        ...state,
        time: (state.time + 1) % 1000,
      }
    }
  }
  return state;
}

export default ui;