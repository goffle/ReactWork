import { combineReducers } from 'redux';

import AppsReducer from './reducer_applications';


const rootReducer = combineReducers({
  applications : AppsReducer
});

export default rootReducer;
