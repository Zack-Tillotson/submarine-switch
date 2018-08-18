import types from './actionTypes';

const initialState = {
  gameState: 'boat', // pre
};

function landing(state = initialState, action) {
  switch(action.type) {
    case types.gameStarted: {
      return {
        ...state,
        gameState: 'boat',
      }
    }
  }
  return state;
}

export default landing;
