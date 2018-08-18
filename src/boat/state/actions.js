import actionTypes from './actionTypes';

function orientationChanged(orientation) {
  return {type: actionTypes.orientationChanged, payload: {orientation}};
}

function startIncrementTime() {
  return {type: actionTypes.startIncrementTime};
}

function timeIncremented(boat) {
  return {type: actionTypes.timeIncremented, payload: {boat}};
}

export default {
  orientationChanged,
  startIncrementTime,
  timeIncremented,
};