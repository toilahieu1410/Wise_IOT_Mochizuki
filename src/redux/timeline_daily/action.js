import {callApiTimeline, callApiDailyChart} from '../../api/timeline';
export const REQUEST_TIMELINE = 'REQUEST_TIMELINE';
export const TIMELINE_SUCCESS = 'TIMELINE_SUCCESS';
export const TIMELINE_ERROR = 'TIMELINE_ERROR';
export const REQUEST_TIMELINE_DAILY = 'REQUEST_TIMELINE_DAILY';
export const TIMELINE_DAILY_SUCCESS = 'TIMELINE_DAILY_SUCCESS';
export const TIMELINE_DAILY_ERROR = 'TIMELINE_DAILY_ERROR';

export const getApiTimeline = (dateTime, start, end) => async dispatch => {
    await dispatch({type: REQUEST_TIMELINE});
    try {
        callApiTimeline(dateTime, start, end)
        .then(function(res) {
            return dispatch({type: TIMELINE_SUCCESS, timeline: res})
        })
    } catch (error) {
        return dispatch({type: TIMELINE_ERROR, error});
    }
}

export const getApiDailyChart = (dateTime, mcid) => async dispatch => {
    await dispatch({type: REQUEST_TIMELINE_DAILY});
    try {
        callApiDailyChart(dateTime, mcid)
        .then(function(res) {
            let dataSTD = [];
            for(let item = 0; item < res[0].data.length; item ++){
                dataSTD.push(res[0].data[item].UPTIME_STD);
            }
            return dispatch({type: TIMELINE_DAILY_SUCCESS, timeline_daily: res, dataSTD: dataSTD})
        })
    } catch (error) {
        return dispatch({type: TIMELINE_DAILY_ERROR, error});
    }
}