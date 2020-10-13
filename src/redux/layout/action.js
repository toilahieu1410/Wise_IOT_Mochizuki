import { callApiLayout } from '../../api/layout';

export const REQUEST_LAYOUT = 'REQUEST_LAYOUT';
export const LAYOUT_SUCCESS = 'LAYOUT_SUCCESS';
export const LAYOUT_ERROR = 'LAYOUT_ERROR';

export const getApiLayout = (page) => async dispatch => {
    await dispatch({type: REQUEST_LAYOUT});
    try {
        callApiLayout(page)
        .then(function(res) {
            return dispatch({type: LAYOUT_SUCCESS, layout: res});
        })
    } catch (error) {
        return dispatch({type: LAYOUT_ERROR, error});
    }
}