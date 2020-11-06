import { FILTER_ITEMS, LOAD_ITEMS, PAGINATE_ITEMS, TOGGLE_SORT } from '../actions';

const INITIAL_STATE = {
  filter: '',
  collection: [],
  sort: 1,
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
      return Object.assign({}, state, {collection: action.items});
    }
    case PAGINATE_ITEMS: {
      const newLowRangeIdx = state.pagination.itemsPerPage * action.page;
      const newCurrentIdxs = [newLowRangeIdx, newLowRangeIdx + 10];

      return Object.assign({}, state, { pagination: { ...Object.assign({}, state.pagination, {currentPage: action.page, currentIdxs: newCurrentIdxs}) } } );
    }
    case TOGGLE_SORT: {
      return Object.assign({},state, {sort: state.sort * -1});
    }
    default: return state;
  }
}

export default itemsReducer;
