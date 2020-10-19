import {callApiReportWeekly} from '../../api/report';
export const REQUEST_REPORT_WEEKLY = 'REQUEST_REPORT_WEEKLY';
export const REPORT_WEEKLY_SUCCESS = 'REPORT_WEEKLY_SUCCESS';
export const REPORT_WEEKLY_ERROR = 'REPORT_WEEKLY_ERROR';

export const getApiReportWeekly = (startDate, endDate) => async dispatch => {
    await dispatch({type: REQUEST_REPORT_WEEKLY});
    try {
        callApiReportWeekly(startDate, endDate)
        .then(function(res) {
            return dispatch({type: REPORT_WEEKLY_SUCCESS, reportWeekly: res})
        })
    } catch (error) {
        return dispatch({type: REPORT_WEEKLY_ERROR, error});
    }
}