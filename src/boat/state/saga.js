import actions from './actions';
import actionTypes from './actionTypes';
import selector from './selector';
import {put, takeEvery, select} from 'redux-saga/effects';

function* doIncrementTime() {
  const boat = yield select(selector);
  yield put(actions.timeIncremented(boat));
}

function* monitor() {
  yield takeEvery(actionTypes.startIncrementTime, doIncrementTime);
}

export default monitor;