'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import agentApp from './reducers';

const store = createStore(agentApp);

// Dummy Data
const agents = [
  'Jimmy Buffet',
  'Ryan Yogan',
  'Cartman',
  'Dee Reynolds',
  'Dennis Reynolds',
  'Frank Reynolds',
  'Bart Simpons',
  'That Guy'
];

// You may run this anywhere, in any client js and render
// out the component(s) you would like
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);