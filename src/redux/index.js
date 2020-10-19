import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';
import layout from './layout/reducer';
import timeline_daily from './timeline_daily/reducer';
import timeline_quantity from './timeline_quantity/reducer';
import timeline_weekly from './timeline_weekly/reducer';
import timeline_monthly from './timeline_monthly/reducer';
import liveBoard from './liveBoard/reducer';
import reportShift from './report_shift/reducer';
import reportHour from './report_hour/reducer';
import reportDaily from './report_daily/reducer';
import reportWeekly from './report_weekly/reducer';
import reportMonthly from './report_monthly/reducer';

const rootReducer = combineReducers({
    auth, layout, timeline_daily, timeline_quantity, timeline_weekly, timeline_monthly, liveBoard,
    reportShift, reportHour, reportDaily, reportWeekly, reportMonthly
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;