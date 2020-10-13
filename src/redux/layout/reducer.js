import {REQUEST_LAYOUT, LAYOUT_SUCCESS, LAYOUT_ERROR} from './action';

const initialState = {
    listLayout: [],
    isLoading: true,
    err: null,
}

const layout = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_LAYOUT:
            return {
                ...state,
                isLoading: true
            }
        case LAYOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listLayout: action.layout
            }
        case LAYOUT_ERROR:
            return {
                ...state,
                isLoading: false,
                err: action.error
            }
        default:
            return state;
    }
}

export default layout;