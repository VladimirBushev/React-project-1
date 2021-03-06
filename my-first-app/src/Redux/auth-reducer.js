import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const TOGGLE_INCORRECT = 'auth/TOGGLE_INCORRECT'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    IncorrectEmailOrPassword: false,
    errorMessages: '',
    captchaUrl: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                errorMessages: '',
                captchaUrl: '',
            }
        case TOGGLE_INCORRECT:
            return {
                ...state,
                IncorrectEmailOrPassword: action.toggle,
                errorMessages: action.messages
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })
const toggleIncorrect = (toggle, messages) => ({ type: TOGGLE_INCORRECT, toggle, messages })
const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL, captchaUrl })

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (login, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(login, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
        dispatch(toggleIncorrect(false))
    } else {
        debugger
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        dispatch(toggleIncorrect(true, response.data.messages ))
    }

}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;