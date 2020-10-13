import {REQUEST_AUTH, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED, 
    SET_LOGGED_IN, 
    LOGOUT} from './action';

const initialState = {
    isLoggedIn: false,    // trang thai login
    restoring: true,
    err: null,
    profile: null   // luu username dang nhap
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_AUTH:
            return {
                ...state,
                restoring: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                restoring: false,
            };
        case LOGIN_FAILED: 
            return {
                ...state,
                restoring: false,
                err: action.err
            };
        case SET_LOGGED_IN:
            return {
                ...state,
                restoring: false,
                isLoggedIn: action.isLoggedIn
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
}
export default auth;