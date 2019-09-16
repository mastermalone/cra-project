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

// You can choose to use compose or composeWithDevTools based on environment
// (i.e.) const composedWithEnhancers = devToolsEnvironments === 'local' ? composeWithDevTools : compose;
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

