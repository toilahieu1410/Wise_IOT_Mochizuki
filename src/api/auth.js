import axios from 'axios'

export const callApiLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/Login', {
                username: username,
                password: password
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}