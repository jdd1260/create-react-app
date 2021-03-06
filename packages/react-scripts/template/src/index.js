import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import createStore from './create-store';

ReactDOM.render(
  <Provider store={createStore()}>
    <div>Quickstart-React</div>
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
