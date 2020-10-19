import {REQUEST_REPORT_MONTHLY,
        REPORT_MONTHLY_SUCCESS,
        REPORT_MONTHLY_ERROR} from './action';

const initialState = {
    listReportMonthly: [],
    isLoading: false,
    err: null
}

const reportMonthly = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_REPORT_MONTHLY:
            return {
                ...state,
                isLoading: true
            }
        case REPORT_MONTHLY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listReportMonthly: action.reportMonthly
            }
        case REPORT_MONTHLY_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        default:
            return state;
    }
}

export default reportMonthly;