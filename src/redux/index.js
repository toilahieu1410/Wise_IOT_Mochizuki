import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';

const rootReducer = combineReducers({
    auth
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;