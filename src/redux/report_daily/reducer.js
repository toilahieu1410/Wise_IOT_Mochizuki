import {REQUEST_REPORT_DAILY,
        REPORT_DAILY_SUCCESS,
        REPORT_DAILY_ERROR} from './action';

const initialState = {
    listReportDaily: [],
    isLoading: false,
    err: null
}

const reportDaily = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_REPORT_DAILY:
            return {
                ...state,
                isLoading: true
            }
        case REPORT_DAILY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listReportDaily: action.reportDaily
            }
        case REPORT_DAILY_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        default:
            return state;
    }
}

export default reportDaily;