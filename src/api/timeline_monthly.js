import axios from 'axios';

export const callApiMonthlyChart = (year, month, mcid) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/MonthlyChart', {
            nam: year,
            thang: month,
            mcid: mcid
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}