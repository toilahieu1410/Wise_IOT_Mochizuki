import {REQUEST_TIMELINE,
        TIMELINE_SUCCESS,
        TIMELINE_ERROR,
        REQUEST_TIMELINE_DAILY,
        TIMELINE_DAILY_SUCCESS,
        TIMELINE_DAILY_ERROR} from './action';

const initialState = {
    listTimeline: [],
    listTimelineDaily: [],
    listDataSTD: [],
    isLoading: false,
    err: null
}

const timeline_daily = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_TIMELINE:
            return {
                ...state,
                isLoading: true
            }
        case TIMELINE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listTimeline: action.timeline
            }
        case TIMELINE_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        case REQUEST_TIMELINE_DAILY:
            return {
                ...state,
                isLoading: true,
            }
        case TIMELINE_DAILY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listTimelineDaily: action.timeline_daily,
                listDataSTD: action.dataSTD
            }
        case TIMELINE_DAILY_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        default:
            return state;
    }
}

export default timeline_daily;