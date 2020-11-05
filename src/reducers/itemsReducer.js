const { FILTER_ITEMS } = require("../actions");

const INITIAL_STATE = {
  filter: '',
}

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FILTER_ITEMS: {
      return Object.assign({}, state, {filter: action.filter});
    }
    default: return state;
  }
}

export default itemsReducer;
