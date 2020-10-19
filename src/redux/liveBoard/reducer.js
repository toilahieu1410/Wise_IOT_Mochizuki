import {REQUEST_LIVE_TIME,
        LIVE_TIME_SUCCESS,
        LIVE_TIME_ERROR,
        REQUEST_LAST_DAY,
        LAST_DAY_SUCCESS,
        LAST_DAY_ERROR} from './action';

const initialState = {
    listLiveBoardTime: [],
    listLiveBoardLastDay: [],
    isLoading: true,
    err: null
}

const liveBoard = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_LIVE_TIME:
            return {
                ...state,
                isLoading: true
            }
        case LIVE_TIME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listLiveBoardTime: action.liveBoardTime
            }
        case LIVE_TIME_ERROR:
            return {
                ...state,
                isLoading:false,
                err: action.error
            }
        case REQUEST_LAST_DAY:
            return {
                ...state,
                isLoading: false,
            }
        case LAST_DAY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listLiveBoardLastDay: action.liveBoardLastDay
            }
        case LAST_DAY_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        default:
            return state;
    }
}

export default liveBoard;