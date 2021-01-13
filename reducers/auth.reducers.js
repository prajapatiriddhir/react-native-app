import { State } from 'react-native-gesture-handler';
import { status, authConstants } from '../_constants'

let initialState = {};

export function auth(state = initialState, action) {
    switch (action, type) {
        case authConstants.REGISTER_USER_REQUEST:
            return {
                ...state,
                register_status: status.IN_PROGRESS,
                registerData: action.data
            }
        case authConstants.REGISTER_USER_SUCCESS:
            return {
                ...state,
                register_status: status.SUCCESS,
                registerData: action.data
            }
        case authConstants.REGISTER_USER_FAILURE:
            return {
                ...state,
                register_status: status.FAILURE,
                registerData: null
            }
        case authConstants.USER_LOGOUT:
            return{
                ...state,
                user:null
            }
        case authConstants.USER_LOGIN_REQUEST:
            return {
                ...state,
                user_login_status:status.IN_PROGRESS,
                user:action.data
            }
        case authConstants.USER_LOGIN_SUCCESS:
            return{
                ...state,
                user_login_status:status.SUCCESS,
                user:action.data
            }
        case authConstants.USER_LOGIN_FAILURE:
            return{
                ...state,
                user_login_status:status.FAILURE,
                user:null
            }
        default:
            return {
                ...state
            }
    }
}