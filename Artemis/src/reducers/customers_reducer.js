import { FETCH_CUSTOMERS } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return action.payload.val() ? action.payload.val() : {} ;
  }
  return state;
}




