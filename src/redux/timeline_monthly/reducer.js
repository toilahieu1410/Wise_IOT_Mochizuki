import {REQUEST_TIMELINE_MONTHLY,
    REQUEST_MONTHLY_SUCCESS,
    REQUEST_MONTHLY_ERROR} from './action';

    const initialState = {
        listTimelineMonthly: [],
        isLoading: false,
        err: null
    }

    const timeline_monthly = (state = initialState, action) => {
        switch (action.type) {
            case REQUEST_TIMELINE_MONTHLY:
                return {
                    ...state,
                    isLoading: true
                }
            case REQUEST_MONTHLY_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    listTimelineMonthly: action.timeline_monthly
                }
            case REQUEST_MONTHLY_ERROR:
                return {
                    ...state,
                    isLoading: false,
                    err: action.error
                }
            default:
                return state;
        }
    }
    export default timeline_monthly;