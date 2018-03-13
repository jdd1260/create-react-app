import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import './index.scss';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const middleWareStore = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={middleWareStore(reducers)}>
    <div>Quickstart-React</div>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
