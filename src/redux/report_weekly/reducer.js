import {REQUEST_REPORT_WEEKLY,
        REPORT_WEEKLY_SUCCESS,
        REPORT_WEEKLY_ERROR} from './action';

const initialState = {
    listReportWeekly: [],
    isLoading: false,
    err: null
}

const reportWeekly = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_REPORT_WEEKLY:
            return {
                ...state,
                isLoading: true
            }
        case REPORT_WEEKLY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listReportWeekly: action.reportWeekly
            }
        case REPORT_WEEKLY_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        default:
            return state;
    }
}

export default reportWeekly;