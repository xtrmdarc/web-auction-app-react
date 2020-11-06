import { FILTER_ITEMS, LOAD_ITEMS, PAGINATE_ITEMS } from '../actions';

const INITIAL_STATE = {
  filter: '',
  collection: [],
  sort: '',
  pagination: {
    currentCollection: [],
    currentPage: 0,
    currentIdxs: [0, 10],
    itemsPerPage: 10,
  },
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FILTER_ITEMS: {
      return Object.assign({}, state, {filter: action.filter});
    }
    case LOAD_ITEMS: {
      // const currentCollection = action.items.slice(state.pagination.currentIdxs[0], state.pagination.currentIdxs[1]);
      return Object.assign({}, state, {collection: action.items});
    }
    case PAGINATE_ITEMS: {
      
      return Object.assign({}, state, {pagination: {currentPage: action.page}});
    }
    default: return state;
  }
}

export default itemsReducer;
