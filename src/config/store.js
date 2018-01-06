// @flow

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { NavigationActions } from 'react-navigation';
import type { NavigationState, NavigationNavigateAction } from 'react-navigation/src/TypeDefinition';

import Navigator from './router';
import reducers from '../reducers';
import { mySaga } from '../sagas';

// 为了 flow 将 combineReducers 放在这进行组合
const initialState = Navigator.router.getStateForAction(NavigationActions.init());
const nav = (state:?NavigationState = initialState, actions: NavigationNavigateAction) => {
  const nextState = Navigator.router.getStateForAction(actions, state);
  return nextState || state;
};

const sagaMiddleware = createSagaMiddleware();

const Reducers = combineReducers({ ...reducers, nav });
const middlewares = [sagaMiddleware];


if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

/* $FlowFixMe */
const store = createStore(Reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(mySaga);


export default store;
