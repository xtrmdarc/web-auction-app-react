import { SET_ACTIVE_ITEM } from '../actions';

const INITIAL_STATE = {};

const activeItemReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_ACTIVE_ITEM: {
      return Object.assign({}, state, action.item);
    }
    default: return state;
  }
}

export default activeItemReducer;
