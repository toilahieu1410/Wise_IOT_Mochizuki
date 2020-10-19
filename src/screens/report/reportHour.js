import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getApiReportHour} from '../../redux/report_hour/action';

const ReportHour = ({navigation}) => {
    const dispatch = useDispatch();
    const listReportHour = useSelector((store) => store.reportHour.listReportHour);
    // console.log(listReportHour)
    const [startDate, setStartDate] = useState('11/10/2020');
    useEffect(() => {
        dispatch(getApiReportHour(startDate));
    }, [])
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Hour"/>
            </Appbar.Header>
        </View>
    )
}

export default ReportHour;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})