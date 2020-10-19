import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getApiReportShift} from '../../redux/report_shift/action';

const ReportShift = ({navigation}) => {
    const dispatch = useDispatch();
    const listReportShift = useSelector((store) => store.reportShift.listReportShift);
    // console.log(listReportShift)

    const [startDate, setStartDate] = useState('11/10/2020');
    const [endDate, setEndDate] = useState('13/10/2020');
    useEffect(() => {
        dispatch(getApiReportShift(startDate, endDate));
    }, [])
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Shift"/>
            </Appbar.Header>
        </View>
    )
}

export default ReportShift;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})