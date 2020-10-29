import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getApiWeeklyChart} from '../../redux/timeline_weekly/action';
import { Appbar, Button } from 'react-native-paper';
import PickYear from '../../components/timeline/pickYear';
import PickDevices from '../../components/timeline/pickMcid';
import StackedBarCharts from '../../components/timeline/stackedBarChart';
import backgroundScreen from '../../publics/images/background.png';

const colors = ['pink', '#FFA500', '#1b6cff', '#efe11f', '#EB1C24', '#008000e3', '#afafafe0']
const keys   = ['TIME_CHANGE_MOLD', 'TIME_BREAK', 'TIME_ERROR', 'TIME_RED', 'TIME_YELLOW', 'TIME_GREEN', 'TIME_OFF']
const dataY = [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000];
const weekly = ({navigation}) => {
  const dispatch = useDispatch();
  const listTimelineWeekly = useSelector((store) => store.timeline_weekly.listTimelineWeekly);
  const today = new Date();
  const years = today.getFullYear();
  const [year, setYear] = useState(String(years));
  const [mcid, setMcid] = useState(1)

  useEffect(() => {
      dispatch(getApiWeeklyChart(year, mcid));
  }, [year, mcid]);

  // Su dung useMemo
  const data = useMemo(() => {
    if(listTimelineWeekly.length === 0 ){
      return null
    }
    return listTimelineWeekly[0].data
  }, [listTimelineWeekly]);

  if(data === null) return null;

    return (
      <ImageBackground source={backgroundScreen} style={styles.picture}>
        <View style={styles.container}>
          <ScrollView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Weekly"/>
            </Appbar.Header>

            <View style={styles.header}>
            <View style={{width:100,borderBottomColor:'#cccccc59',borderBottomLeftRadius:10,
      borderBottomRightRadius:20,borderBottomWidth:1,}}>
              <PickYear
              year={year}
              setYear={setYear}/>
              </View>
              <View style={{width:150,borderBottomColor:'#cccccc59',borderBottomLeftRadius:10,
      borderBottomRightRadius:20,
      borderBottomWidth:1,}}>
              <PickDevices
              devices={mcid}
              setDevices={setMcid}/>
              </View>
            
          
            </View>
            <StackedBarCharts
            keys={keys}
            colors={colors}
            data={data}
            dataY={dataY}
            horizontal={false}/>
            </ScrollView>
        </View>
        </ImageBackground>
    )
}

export default weekly;
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
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginLeft:150,
    marginRight:150,
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
})