import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getApiReportWeekly} from '../../redux/report_weekly/action';

const ReportWeekly = ({navigation}) => {
    const dispatch = useDispatch();
    const listReportWeekly = useSelector((store) => store.reportWeekly.listReportWeekly);
    console.log(listReportWeekly)
    const [startDate, setStartDate] = useState('11/10/2020');
    const [endDate, setEndDate] = useState('13/10/2020');
    useEffect(() => {
        dispatch(getApiReportWeekly(startDate, endDate));
    }, [])
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Weekly"/>
            </Appbar.Header>
        </View>
    )
}

export default ReportWeekly;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})