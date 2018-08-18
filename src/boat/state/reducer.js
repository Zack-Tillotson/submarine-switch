import {combineReducers} from 'redux';
import types from './actionTypes';

import ui from './reducers/ui';
import boat from './reducers/boat';
import ships from './reducers/ships';

import sub from '../sub/state/reducer';
import surface from '../surface/state/reducer';

export default combineReducers({
  ui,
  sub,
  surface,
  boat,
  ships,
});
