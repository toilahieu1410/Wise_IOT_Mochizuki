import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Appbar, Button } from 'react-native-paper';
import DatePicker from '../../components/timeline/datePicker';
import {getApiTimeline, getApiDailyChart} from '../../redux/timeline_daily/action';
import moment from 'moment';

const daily = ({navigation}) => {
    const dispatch = useDispatch();
    // Timeline
    const listTimeline = useSelector((store) => store.timeline_daily.listTimeline);
    const listTimelineDaily = useSelector((store) => store.timeline_daily.listTimelineDaily);

    // Chart Daily
    const [date, setDate] = useState(new Date());
    const [start, setStart] = useState(6);
    const [end, setEnd] = useState(6);
    const [mcid, setMcid] = useState(1);
    const dateTime = moment(date).format('DD/MM/YYYY');

    useEffect(() => {
        dispatch(getApiTimeline(dateTime, start, end));
        dispatch(getApiDailyChart(dateTime, mcid));
    }, [dateTime])
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Daily"/>
            </Appbar.Header>
     
                <DatePicker onPress={(text) => setDate(text)}/>
    
        </View>
    )
}

export default daily;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})