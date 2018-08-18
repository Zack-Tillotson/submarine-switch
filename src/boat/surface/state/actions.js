import actionTypes from './actionTypes';

function orientationChanged(orientation) {
  return {type: actionTypes.orientationChanged, payload: {orientation}};
}

export default {
  orientationChanged,
};