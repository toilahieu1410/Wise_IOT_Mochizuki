import axios from 'axios';

export const callApiLayout = (page) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/GETDATA', {
            sotrang: page
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}