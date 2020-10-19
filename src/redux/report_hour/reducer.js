import {REQUEST_REPORT_HOUR,
        REPORT_HOUR_SUCCESS,
        REPORT_HOUR_ERROR} from './action';

const initialState = {
    listReportHour: [],
    isLoading: false,
    err: null
}

const reportHour = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_REPORT_HOUR:
            return {
                ...state,
                isLoading: true
            }
        case REPORT_HOUR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listReportHour: action.reportHour
            }
        case REPORT_HOUR_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        default:
            return state;
    }
}

export default reportHour;