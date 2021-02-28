import { authAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const TOGGLE_INCORRECT = 'auth/TOGGLE_INCORRECT'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    IncorrectEmailOrPassword: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case TOGGLE_INCORRECT:
            return {
                ...state,
                IncorrectEmailOrPassword: action.toggle
            }
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })
const toggleIncorrect = (toggle) => ({ type: TOGGLE_INCORRECT, toggle })

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (login, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(login, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
        dispatch(toggleIncorrect(false))
    } else {
        dispatch(toggleIncorrect(true))
    }

}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;