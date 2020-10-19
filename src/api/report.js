import axios from 'axios';

export const callApiReportShift = (startDate, endDate) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/ReportShift', {
            tungay: startDate,
            denNgay: endDate
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}

export const callApiReportHour = (startDate) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/ReportHour', {
            date: startDate,
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}

export const callApiReportDaily = (startDate, endDate) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/ReportDaily', {
            tungay: startDate,
            denNgay: endDate
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}

export const callApiReportWeekly = (startDate, endDate) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/ReportWeekly', {
            tungay: startDate,
            denNgay: endDate
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}

export const callApiReportMonthly = (year, listMonth) => {
    return new Promise((resolve, reject) => {
        axios.post('https://wise-mochizuki.hoplongtech.com/api/Api_Machine/ReportMonthly', {
            nam: year,
            ListThang: listMonth
        })
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    })
}