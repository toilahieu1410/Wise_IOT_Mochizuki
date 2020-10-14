import axios from 'axios';

export const callApiQuantityChart = (dateTime, mcid) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/QuantityChart', {
            date: dateTime,
            mcid: mcid
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}