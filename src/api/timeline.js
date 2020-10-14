import axios from 'axios';

export const callApiTimeline = (dateTime, start, end) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/Timeline', {
            date: dateTime,
            start: start,
            end: end
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}

export const callApiDailyChart = (dateTime, mcid) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/DailyChart',{
            date:dateTime,
            mcid:mcid
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}