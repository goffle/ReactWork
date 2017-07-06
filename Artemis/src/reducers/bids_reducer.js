import { FETCH_BIDS } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_BIDS:
      return action.payload.val() ? action.payload.val() : {} ;
  }
  return state;
}




