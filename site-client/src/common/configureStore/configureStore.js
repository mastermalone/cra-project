import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { homeStore, aboutStore, productsStore } from '../../pages/storeExports';

const stores = [homeStore, aboutStore, productsStore];
const baseState = {};

const getStoreReducers = () => {
  const reducers = {}; 

  stores.forEach((store) => {
    const storeValue = store;
    const { name, reducer, initialState = {} } = storeValue;
    reducers[name] = reducer;
    baseState[name] = initialState;
  });
  return reducers;
};

const rootReducer = combineReducers({
  ...getStoreReducers(),
});

const configureStore = (state) => {

  const persistConfig = {
    key: 'primary',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composeDevOrProd = window.location.hostname === 'localhost' ? composeWithDevTools : compose;
  const composedWithEnhancers = composeDevOrProd(...enhancers)
  
  const store = createStore(persistedReducer, baseState, composedWithEnhancers);
  const persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;

