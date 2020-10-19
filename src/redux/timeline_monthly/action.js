import {callApiMonthlyChart} from '../../api/timeline_monthly';
export const REQUEST_TIMELINE_MONTHLY = 'REQUEST_TIMELINE_MONTHLY';
export const REQUEST_MONTHLY_SUCCESS = 'REQUEST_TIMELINE_SUCCESS';
export const REQUEST_MONTHLY_ERROR = 'REQUEST_TIMELINE_ERROR';

export const getApiMonthlyChart = (year, month, mcid) => async dispatch => {
    await dispatch({type: REQUEST_TIMELINE_MONTHLY});
    try {
        callApiMonthlyChart(year, month,mcid)
        .then(function(res) {
            return dispatch({type: REQUEST_MONTHLY_SUCCESS, timeline_monthly: res})
        })
    } catch (error) {
        return dispatch({type: REQUEST_MONTHLY_ERROR, error});
    }
}