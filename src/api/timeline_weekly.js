import axios from 'axios';

export const callApiWeeklyChart = (year, mcid) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/WeeklyChart', {
            date: year,
            mcid: mcid
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}