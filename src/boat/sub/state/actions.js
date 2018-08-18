import actionTypes from './actionTypes';

function boatInputReceived(type) {
  return {type: actionTypes.boatInputReceived, payload: {type}};
}

export default {
  boatInputReceived,
};