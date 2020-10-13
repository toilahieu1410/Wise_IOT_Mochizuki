import AsyncStorage from '@react-native-community/async-storage';
import { callApiLogin } from '../../api/auth';

export const REQUEST_AUTH = 'REQUEST_AUTH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const LOGOUT = 'LOGOUT';

const tokenKey = 'tokenKey';

export const getApiLogin = (username, password) => async dispatch => {
    await dispatch({type: REQUEST_AUTH});
    try {
        callApiLogin(username, password)
        .then(function(res) {
            if(res === 'Đăng nhập thành công') {
                const userToken = AsyncStorage.setItem(tokenKey, username)
                return dispatch({
                    type: LOGIN_SUCCESS,
                    username: username
                });
            } else {
                return dispatch({
                    type: LOGIN_FAILED
                })
            }
        })
    } catch (error) {
        return dispatch({type: LOGIN_FAILED, error})
    }
}

export const checkLogin = () => {
    return async (dispatch) => {
        const isLoggedIn = await restoreAuthStateFromStorage();
        dispatch({
            type: SET_LOGGED_IN,
            isLoggedIn
        })
    }
}

const restoreAuthStateFromStorage = async () => {
    try {
        return await AsyncStorage.getItem(tokenKey);
    } catch (error) {
        return false;
    }
}

