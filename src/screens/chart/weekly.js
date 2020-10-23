import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getApiWeeklyChart} from '../../redux/timeline_weekly/action';
import { Appbar, Button } from 'react-native-paper';
import PickYear from '../../components/timeline/pickYear';
import PickDevices from '../../components/timeline/pickMcid';
import StackedBarCharts from '../../components/timeline/stackedBarChart';

const weekly = ({navigation}) => {
const dispatch = useDispatch();
const listTimelineWeekly = useSelector((store) => store.timeline_weekly.listTimelineWeekly);
const [year, setYear] = useState(2020);
const [mcid, setMcid] = useState(1)

useEffect(() => {
    dispatch(getApiWeeklyChart(year, mcid));
}, [year, mcid]);
    const data = listTimelineWeekly;
    const colors = [ 'green', 'red', 'yellow', 'gray', 'white', 'blue', 'pink' ]
    const keys   = [ 'TIME_GREEN', 'TIME_RED', 'TIME_YELLOW', 'TIME_OFF', 'TIME_ERROR', 'TIME_BREAK', 'TIME_CHANGE_MOLD']
    const dataY = [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000];
    return (
        <View style={styles.container}>
          <ScrollView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Weekly"/>
            </Appbar.Header>

            <View style={styles.header}>
              <PickYear
              year={year}
              setYear={setYear}/>
              <PickDevices
              devices={mcid}
              setDevices={setMcid}/>
            </View>
            <StackedBarCharts
            keys={keys}
            colors={colors}
            data={data}
            dataY={dataY}/>
          </ScrollView>
        </View>
    )
}

export default weekly;
const styles = StyleSheet.create({
  container: {
      flex:1,
  },
  header: {
    flexDirection: 'column'
  },
  title: {
      color:'#0b4645db',
      textAlign:'center',
      marginLeft: 5,
      fontSize: 22,
      fontWeight: 'bold'
  }
})