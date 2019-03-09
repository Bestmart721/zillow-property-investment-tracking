import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import zillowReducer from './zillowReducer';

export default combineReducers({
  zillowState:zillowReducer,
  routing
})
