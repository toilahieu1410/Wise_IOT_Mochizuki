import {callApiQuantityChart} from '../../api/timeline_quantity';
export const REQUEST_TIMELINE_QUANTITY = 'REQUEST_TIMELINE_QUANTITY';
export const TIMELINE_QUANTITY_SUCCESS = 'TIMELINE_QUANTITY_SUCCESS';
export const TIMELINE_QUANTITY_ERROR = 'TIMELINE_QUANTITY_ERROR';

export const getApiQuantityChart = (dateTime, mcid) => async dispatch => {
    await dispatch({type: REQUEST_TIMELINE_QUANTITY});
    try {
        callApiQuantityChart(dateTime, mcid)
        .then(function(res) {
            let dataRequest = [];
            for (let item=0; item<res[0].data.length; item++) {
                dataRequest.push(res[0].data[item].y)
            }
            return dispatch({type: TIMELINE_QUANTITY_SUCCESS, timeline_quantity: dataRequest})
        })
    } catch (error) {
        return dispatch({type: TIMELINE_QUANTITY_ERROR, error});
    }
}