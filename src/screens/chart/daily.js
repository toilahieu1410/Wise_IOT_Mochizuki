import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Appbar } from 'react-native-paper';
import DatePicker from '../../components/timeline/datePicker';
import {getApiTimeline, getApiDailyChart} from '../../redux/timeline_daily/action';
import moment from 'moment';
import PickDevices from '../../components/timeline/pickMcid';
import StackedBarCharts from '../../components/timeline/stackedBarChart';
import LineCharts from '../../components/timeline/lineChart';

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
    }, [mcid, dateTime])
    const dataLineChart = [50, 10, 40];
    const dataX = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5];
    const dataY = [0,20,40,60]
    const data = [
        {
            month: new Date(2015, 0, 1),
            apples: 3840,
            bananas: 1920,
            cherries: 960,
            dates: 400,
            oranges: 400,
        },
        {
            month: new Date(2015, 1, 1),
            apples: 1600,
            bananas: 1440,
            cherries: 960,
            dates: 400,
        },
        {
            month: new Date(2015, 2, 1),
            apples: 640,
            bananas: 960,
            cherries: 3640,
            dates: 400,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 3320,
            bananas: 480,
            cherries: 640,
            dates: 400,
        },
    ]
    const colors = [ '#7b4173', '#a55194', '#ce6dbd', '#de9ed6' ]
    const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]
    return (
        <View style={styles.container}>
             <ScrollView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Daily"/>
            </Appbar.Header>
            <DatePicker onPress={(text) => setDate(text)}/>
            <PickDevices
                devices={mcid}
                setDevices={setMcid}
            />
            <Text style={styles.title}>{mcid}</Text>
            <StackedBarCharts
                keys={keys}
                colors={colors}
                data={data}
                dataX={dataX}
                dataY={dataY}
            >
            <LineCharts dataLineChart={dataLineChart}/>
            </StackedBarCharts>
            
            </ScrollView>
        </View>
    )
}

export default daily;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color:'#0b4645db',
        textAlign:'center',
        marginLeft: 5,
        fontSize: 22,
        fontWeight: 'bold'
    }
})