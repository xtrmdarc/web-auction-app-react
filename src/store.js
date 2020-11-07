import {createStore} from 'redux';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user', 'activeItem'],
}

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer);
export const persistor = persistStore(store);

export default store;