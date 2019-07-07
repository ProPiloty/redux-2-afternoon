import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

// REDUCERS
import budgetReducer from './budgetReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));