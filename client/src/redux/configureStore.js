import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';
import thunk from 'redux-thunk';

import cate from './modules/cate';
import jsapi from './modules/jsapi';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, loggerMiddleware)(
  createStore,
);

const reducer = combineReducers({
  cate,
  jsapi,
});

const configureStore = (initialState = {}) =>
  createStoreWithMiddleware(reducer, Immutable.fromJS(initialState));

export default configureStore;
