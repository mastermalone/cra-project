import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { homeStore } from '../../pages/storeExports';

const stores = [homeStore];
const baseState = {};

const getStoreReducers = () => {
  const reducers = {}; 

  stores.forEach((store) => {
    const storeValue = store();
    const { name, reducer, initialState = {} } = storeValue;
    console.log('Reducer', reducer)
    reducers[name] = reducer;
    baseState[name] = initialState;
  });
  return reducers;
};

console.log('getStoreReducers', getStoreReducers);

const rootReducer = combineReducers({
  ...getStoreReducers(),
});

console.log('rootReducer', rootReducer());

const devToolsEnvironments = ['local', 'dev', 'qa'];

const configureStore = (state) => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedWithEnhancers = composeWithDevTools(...enhancers)
  
  const store = createStore(rootReducer, baseState, composedWithEnhancers);

  return store;
}

export default configureStore;

