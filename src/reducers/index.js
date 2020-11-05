
import {combineReducers} from 'redux';
import activeItemReducer from './activeItemReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  activeItem: activeItemReducer,
});

export default rootReducer;