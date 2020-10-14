import {REQUEST_TIMELINE_QUANTITY,
        TIMELINE_QUANTITY_SUCCESS,
        TIMELINE_QUANTITY_ERROR} from './action';

const initialState = {
    listTimelineQuantity: [],
    isLoading: false,
    err: null
}

const timeline_quantity = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_TIMELINE_QUANTITY:
            return {
                ...state,
                isLoading: true
            }
        case TIMELINE_QUANTITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listTimelineQuantity: action.timeline_quantity
            }
        case TIMELINE_QUANTITY_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        default:
            return state;
    }
}
export default timeline_quantity;