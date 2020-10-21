import {callApiLiveBoardTime, callApiLast5Day} from '../../api/liveBoard';
export const REQUEST_LIVE_TIME = 'REQUEST_LIVE_TIME';
export const LIVE_TIME_SUCCESS = 'LIVE_TIME_SUCCESS';
export const LIVE_TIME_ERROR = 'LIVE_TIME_ERROR';

export const REQUEST_LAST_DAY = 'REQUEST_LAST_DAY';
export const LAST_DAY_SUCCESS = 'LAST_DAY_SUCCESS';
export const LAST_DAY_ERROR = 'LAST_DAY_ERROR';

export const getApiLiveBoardTime = (mcid) => async dispatch => {
    await dispatch({type: REQUEST_LIVE_TIME});
    try {
        callApiLiveBoardTime(mcid)
        .then(function(res) {
            return dispatch({type: LIVE_TIME_SUCCESS, liveBoardTime: res})
        })
    } catch (error) {
        console.log('error:' + error)
        return dispatch({type: LIVE_TIME_ERROR, error});
    }
};

export const getApiLast5Day = (mcid) => async dispatch => {
    await dispatch({type: REQUEST_LAST_DAY});
    try {
        callApiLast5Day(mcid)
        .then(function(res) {
            return dispatch({type: LAST_DAY_SUCCESS, liveBoardLastDay: res})
        })
    } catch (error) {
        return dispatch({type: LAST_DAY_ERROR, error});
    }
}