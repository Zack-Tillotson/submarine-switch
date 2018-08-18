import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'

import boatSaga from '../boat/state/saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareAry = [];

const sagaMiddleware = createSagaMiddleware();
middlewareAry.push(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, composeEnhancers(...middlewareAry));
sagaMiddleware.run(boatSaga);

export default store;