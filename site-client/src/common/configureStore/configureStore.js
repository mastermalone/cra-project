import { applyMiddleware, combineReducers, compose, createStore } from 'redux';


import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { homeStore, aboutStore } from '../../pages/storeExports';

const stores = [homeStore, aboutStore];
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
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composeDevOrProd = window.location.hostname === 'localhost' ? composeWithDevTools : compose;
  const composedWithEnhancers = composeDevOrProd(...enhancers)
  
  const store = createStore(rootReducer, baseState, composedWithEnhancers);

  return store;
}

export default configureStore;

