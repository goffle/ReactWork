import { combineReducers } from 'redux';

import PortfolioReducer from './reducer_portfolios';
import CompanyReducer from './reducer_companies';

const rootReducer = combineReducers({
  portfolio : PortfolioReducer,
  companies : CompanyReducer
});

export default rootReducer;
