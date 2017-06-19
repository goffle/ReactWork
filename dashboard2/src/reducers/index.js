import { combineReducers } from 'redux';

import PortfolioReducer from './reducer_portfolios';
import CompanyReducer from './reducer_companies';
import { reducer as reducerForm } from 'redux-form';


const rootReducer = combineReducers({
  portfolio : PortfolioReducer,
  companies : CompanyReducer,
  form: reducerForm
});

export default rootReducer;
