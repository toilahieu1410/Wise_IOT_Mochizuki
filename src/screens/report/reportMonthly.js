import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getApiReportMonthly} from '../../redux/report_monthly/action';

const ReportMonthly = ({navigation}) => {
    const dispatch = useDispatch();
    const listReportMonthly = useSelector((store) => store.reportMonthly.listReportMonthly);
    console.log(listReportMonthly)
    const [year, setYear] = useState(2020);
    const [month, setMonth] = useState([{thang: 10}, {thang: 9}]);
    useEffect(() => {
        dispatch(getApiReportMonthly(year, month));
    }, [])
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Monthly"/>
            </Appbar.Header>
        </View>
    )
}

export default ReportMonthly;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})