
import {combineReducers} from 'redux';
import activeItemReducer from './activeItemReducer';
import itemsReducer from './itemsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  activeItem: activeItemReducer,
  user: userReducer,
});

export default rootReducer;
