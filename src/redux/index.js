import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';
import layout from './layout/reducer';

const rootReducer = combineReducers({
    auth, layout
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;