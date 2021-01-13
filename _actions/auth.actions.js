import {authServices} from '../_services/auth.services'
import {authConstants} from '../_constants/auth.constants';
import Toast from 'react-native-simple-toast';

export const authActions = {
    register,
    login
}


function register(data) {
    return dispatch => {
        dispatch(({
            type: authConstants.REGISTER_USER_REQUEST,
            data: null
        }));
        authServices.register(data)
            .then(
                response => {
                    if (response.status == 200) {
                        dispatch(({
                            type: authConstants.REGISTER_USER_SUCCESS,
                            data: response.data
                        }));
                        Toast.show(response.data.message);
                    } else {
                        dispatch(({
                            type: authConstants.REGISTER_USER_FAILURE,
                            data: response
                        }));
                        Toast.show('Error !', response.data.message);
                    }
                },
                error => {
                    dispatch(({
                        type: authConstants.REGISTER_USER_FAILURE,
                        data: error.message
                    }));
                    Toast.show('Error !', error.message);
                }
            );
    };
}


function login(data) {
    return dispatch => {
        dispatch(({
            type: authConstants.USER_LOGIN_REQUEST,
            data: null
        }));
        authServices.login(data)
            .then(
                response => {
                    if (response.status == 200) {
                        dispatch(({
                            type: authConstants.USER_LOGIN_SUCCESS,
                            data: response.data
                        }));
                        Toast.show(response.data.message);
                    } else {
                        dispatch(({
                            type: authConstants.USER_LOGIN_FAILURE,
                            data: response
                        }));
                        Toast.show('Error !', response.data.message);
                    }
                },
                error => {
                    dispatch(({
                        type: authConstants.USER_LOGIN_FAILURE,
                        data: error.message
                    }));
                    Toast.show('Error !', error.message);
                }
            );
    };
}