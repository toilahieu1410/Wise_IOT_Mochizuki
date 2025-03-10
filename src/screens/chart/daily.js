import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Appbar } from 'react-native-paper';
import DatePicker from '../../components/timeline/datePicker';
import {getApiTimeline, getApiDailyChart} from '../../redux/timeline_daily/action';
import moment from 'moment';
import StackedBarCharts from '../../components/timeline/stackedBarChart';
import LineCharts from '../../components/timeline/lineChart';
import PickDevices from '../../components/timeline/pickMcid';
import { LineChart } from 'react-native-svg-charts';
import backgroundScreen from '../../publics/images/background.png';

const colors = ['pink', '#FFA500', '#1b6cff', '#efe11f', '#EB1C24', '#008000e3', '#afafafe0']
const keys   = ['TIME_CHANGE_MOLD', 'TIME_BREAK', 'TIME_ERROR', 'TIME_RED', 'TIME_YELLOW', 'TIME_GREEN', 'TIME_OFF']
const dataY = [10,20,30,40,50,60];
const dataX = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5];


const daily = ({navigation}) => {
    const dispatch = useDispatch();
    // Timeline  
    // const listTimeline = useSelector((store) => store.timeline_daily.listTimeline);
    const listTimelineDaily = useSelector((store) => store.timeline_daily.listTimelineDaily);
    const listDataSTD = useSelector((store) => store.timeline_daily.listDataSTD);

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

    const data = useMemo(() => {
        if(listTimelineDaily.length ===0){
            return null;
        }
        return listTimelineDaily[0].data;
    }, [listTimelineDaily]);
    if(data === null) return null;

    return (
        <ImageBackground source={backgroundScreen} style={styles.picture}>
        <View style={styles.container}>
             <ScrollView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Daily"/>
            </Appbar.Header>
            <View style={styles.header}>
            <View style={{width:150,borderBottomColor:'#cccccc59',borderBottomLeftRadius:10,
      borderBottomRightRadius:20,borderBottomWidth:1,}}>
            <DatePicker onPress={(text) => setDate(text)}/>
            </View>
            <View style={{width:150,borderBottomColor:'#cccccc59',borderBottomLeftRadius:10,
      borderBottomRightRadius:20,borderBottomWidth:1,}}>
            <PickDevices
                devices={mcid}
                setDevices={setMcid}
            />
            </View>
            </View>
          
           
            <StackedBarCharts
            keys={keys}
            colors={colors}
            data={data}
            dataY={dataY}
            dataX={dataX}
            horizontal={false}
            >
            </StackedBarCharts>
            {/* <LineCharts dataLineChart={listDataSTD}/> */}
            </ScrollView>
        </View>
        </ImageBackground>
    )
}

export default daily;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282f3ac7',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position:'absolute',
    },
    title: {
        color:'#0b4645db',
        textAlign:'center',
        marginLeft: 5,
        fontSize: 22,
        fontWeight: 'bold'
    },
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginLeft:150,
        marginRight:150,
      },
})