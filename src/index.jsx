import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.scss';
import App from './App.jsx';
import storeCurrentUser from './utils/storeCurrentUser';
import storeToken from './utils/storeToken';

const store = configureStore();
storeToken();
storeCurrentUser(store);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
