import { combineReducers } from 'redux';

import AppsReducer from './reducer_applications';


const rootReducer = combineReducers({
  apps : AppsReducer
});

export default rootReducer;
