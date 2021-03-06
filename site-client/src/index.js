import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../src/common/configureStore/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import history from '../src/common/history/history';
import './index.css';
import App from './AppContainer';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <PersistGate loading="null" persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
