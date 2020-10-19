import {callApiWeeklyChart} from '../../api/timeline_weekly';
export const REQUEST_TIMELINE_WEEKLY = 'REQUEST_TIMELINE_WEEKLY';
export const TIMELINE_WEEKLY_SUCCESS = 'TIMELINE_WEEKLY_SUCCESS';
export const TIMELINE_WEEKLY_ERROR = 'TIMELINE_WEEKLY_ERROR';

export const getApiWeeklyChart = (year, mcid) => async dispatch => {
    await dispatch({type: REQUEST_TIMELINE_WEEKLY});
    try {
        callApiWeeklyChart(year, mcid)
        .then(function(res) {
            return dispatch({type: TIMELINE_WEEKLY_SUCCESS, timeline_weekly: res})
        })
    } catch (error) {
        return dispatch({type: TIMELINE_WEEKLY_ERROR, error});
    }
}