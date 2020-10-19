import {REQUEST_TIMELINE_WEEKLY,
        TIMELINE_WEEKLY_SUCCESS,
        TIMELINE_WEEKLY_ERROR} from './action';

const initialState = {
    listTimelineWeekly: [],
    isLoading: false,
    err: null
}

const timeline_weekly = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_TIMELINE_WEEKLY:
            return {
                ...state,
                isLoading: true
            }
        case TIMELINE_WEEKLY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listTimelineWeekly: action.timeline_weekly
            }
        case TIMELINE_WEEKLY_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        default:
            return state;
    }
}
export default timeline_weekly;