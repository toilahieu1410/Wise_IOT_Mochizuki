import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';
import layout from './layout/reducer';
import timeline_daily from './timeline_daily/reducer';

const rootReducer = combineReducers({
    auth, layout, timeline_daily
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;