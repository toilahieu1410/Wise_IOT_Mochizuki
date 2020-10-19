import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getApiReportDaily} from '../../redux/report_daily/action';

const ReportDaily = ({navigation}) => {
    const dispatch = useDispatch();
    const listReportDaily = useSelector((store) => store.reportDaily.listReportDaily);
    // console.log(listReportDaily);

    const [startDate, setStartDate] = useState('11/10/2020');
    const [endDate, setEndDate] = useState('13/10/2020');
    useEffect(() => {
        dispatch(getApiReportDaily(startDate, endDate));
    }, [])
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Daily"/>
            </Appbar.Header>
        </View>
    )
}

export default ReportDaily;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})