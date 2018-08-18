import { combineReducers } from 'redux';

import landing from '../landing/state/reducer';
import boat from '../boat/state/reducer';

export default combineReducers({
  landing,
  boat,
});