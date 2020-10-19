import {callApiReportDaily} from '../../api/report';
export const REQUEST_REPORT_DAILY = 'REQUEST_REPORT_DAILY';
export const REPORT_DAILY_SUCCESS = 'REPORT_DAILY_SUCCESS';
export const REPORT_DAILY_ERROR = 'REPORT_DAILY_ERROR';

export const getApiReportDaily = (startDate, endDate) => async dispatch => {
    await dispatch({type: REQUEST_REPORT_DAILY});
    try {
        callApiReportDaily(startDate, endDate)
        .then(function(res) {
            return dispatch({type: REPORT_DAILY_SUCCESS, reportDaily: res})
        })
    } catch (error) {
        return dispatch({type: REPORT_DAILY_ERROR, error});
    }
}