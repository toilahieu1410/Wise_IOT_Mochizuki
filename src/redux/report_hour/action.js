import {callApiReportHour} from '../../api/report';
export const REQUEST_REPORT_HOUR = 'REQUEST_REPORT_HOUR';
export const REPORT_HOUR_SUCCESS = 'REPORT_HOUR_SUCCESS';
export const REPORT_HOUR_ERROR = 'REPORT_HOUR_ERROR';

export const getApiReportHour = (startDate) => async dispatch => {
    await dispatch({type: REQUEST_REPORT_HOUR});
    try {
        callApiReportHour(startDate)
        .then(function(res) {
            return dispatch({type: REPORT_HOUR_SUCCESS, reportHour: res})
        })
    } catch (error) {
        return dispatch({type: REPORT_HOUR_ERROR, error});
    }
}