import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

export default () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(promise))(
    createStore
  );

  const store = createStoreWithMiddleware(reducers);

  return store;
};
