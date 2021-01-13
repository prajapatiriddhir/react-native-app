import { config } from '../config';

export const authServices = {
    register,
    login
}

function register(data) {
    return fetch(`${config.API_ENDPOINT}/api/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((data) => data.json);
}

function login(data) {
    return fetch(`${config.API_ENDPOINT}/api/login`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        },

    }).then((data)=>data.json)
}
