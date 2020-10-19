import {callApiReportMonthly} from '../../api/report';
export const REQUEST_REPORT_MONTHLY = 'REQUEST_REPORT_MONTHLY';
export const REPORT_MONTHLY_SUCCESS = 'REPORT_MONTHLY_SUCCESS';
export const REPORT_MONTHLY_ERROR = 'REPORT_MONTHLY_ERROR';

export const getApiReportMonthly = (year, listMonth) => async dispatch => {
    await dispatch({type: REQUEST_REPORT_MONTHLY});
    try {
        callApiReportMonthly(year, listMonth)
        .then(function(res) {
            return dispatch({type: REPORT_MONTHLY_SUCCESS, reportMonthly: res})
        })
    } catch (error) {
        return dispatch({type: REPORT_MONTHLY_ERROR, error});
    }
}