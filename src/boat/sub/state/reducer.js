import types from './actionTypes';

const initialState = {
  level: 'sub',
};

function boat(state = initialState, action) {
  switch(action.type) {
    case types.orientationChanged: {
      const {orientation} = action.payload;
      return {
        ...state,
        level: orientation.indexOf('portrait') === 0 ? 'surface' : 'sub',
      }
    }
  }
  return state;
}

export default boat;
