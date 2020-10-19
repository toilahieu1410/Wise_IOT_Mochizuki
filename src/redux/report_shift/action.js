import {callApiReportShift} from '../../api/report';
export const REQUEST_REPORT_SHIFT = 'REQUEST_REPORT_SHIFT';
export const REPORT_SHIFT_SUCCESS = 'REPORT_SHIFT_SUCCESS';
export const REPORT_SHIFT_ERROR = 'REPORT_SHIFT_ERROR';

export const getApiReportShift = (startDate, endDate) => async dispatch => {
    await dispatch({type: REQUEST_REPORT_SHIFT});
    try {
        callApiReportShift(startDate, endDate)
        .then(function(res) {
            return dispatch({type: REPORT_SHIFT_SUCCESS, report_shift: res})
        })
    } catch (error) {
        return dispatch({type: REPORT_SHIFT_ERROR, error});
    }
}