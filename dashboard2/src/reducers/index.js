import { combineReducers } from 'redux';

import PortfolioReducer from './reducer_portfolios';


const rootReducer = combineReducers({
  portfolio : PortfolioReducer
});

export default rootReducer;
