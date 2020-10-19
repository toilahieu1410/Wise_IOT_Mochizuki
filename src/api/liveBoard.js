import axios from 'axios';

export const callApiLiveBoardTime  = (mcid) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/LiveBoardTime', {
            mcid: mcid
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
};

export const callApiLast5Day = (mcid) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/Last5DaysLiveBoardTime', {
            mcid: mcid
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}