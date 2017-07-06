import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import bids_reducer from './bids_reducer';
import shops_reducer from './shops_reducer';
import products_reducer from './products_reducer';
import customers_reducer from './customers_reducer';


const rootReducer = combineReducers({
  form: reducerForm,
  bids: bids_reducer,
  customers: customers_reducer,
  products: products_reducer,
  shops: shops_reducer
});

export default rootReducer;
