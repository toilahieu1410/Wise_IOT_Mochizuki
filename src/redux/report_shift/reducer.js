import {REQUEST_REPORT_SHIFT,
        REPORT_SHIFT_SUCCESS,
        REPORT_SHIFT_ERROR} from './action';

const initialState = {
    listReportShift: [],
    isLoading: false,
    err: null
}

const reportShift = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_REPORT_SHIFT:
            return {
                ...state,
                isLoading: true
            }
        case REPORT_SHIFT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listReportShift: action.reportShift
            }
        case REPORT_SHIFT_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        default:
            return state;
    }
}

export default reportShift;