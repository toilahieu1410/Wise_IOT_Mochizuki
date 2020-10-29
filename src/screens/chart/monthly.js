import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import { Appbar } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getApiMonthlyChart} from '../../redux/timeline_monthly/action';
import PickYear from '../../components/timeline/pickYear';
import PickMonth from '../../components/timeline/pickMonth';
import PickDevices from '../../components/timeline/pickMcid';
import StackedBarCharts from '../../components/timeline/stackedBarChart';
import backgroundScreen from '../../publics/images/background.png';

const colors = ['pink', '#FFA500', '#1b6cff', '#efe11f', '#EB1C24', '#008000e3', '#afafafe0']
const keys   = ['TIME_CHANGE_MOLD', 'TIME_BREAK', 'TIME_ERROR', 'TIME_RED', 'TIME_YELLOW', 'TIME_GREEN', 'TIME_OFF']
const dataY = [200,400,600,800,1000,1200,1400];
const dataX = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
const monthly = ({navigation}) => {
    const dispatch = useDispatch();
    const listTimelineMonthly = useSelector((store) => store.timeline_monthly.listTimelineMonthly);
    const today = new Date();
    const years = today.getFullYear();
    const months = today.getMonth();
    const [year, setYear] = useState(String(years));
    const [month, setMonth] = useState(months + 1);
    const [mcid, setMcid] = useState(1);

    useEffect(() => {
        dispatch(getApiMonthlyChart(year, month, mcid));
    }, [year, month, mcid]);

    const data = useMemo(() =>{
      if(listTimelineMonthly.length === 0){
        return null;
      }
      return listTimelineMonthly[0].data;
    }, [listTimelineMonthly]);
    if(data === null) return null;

    return (
      <ImageBackground source={backgroundScreen} style={styles.picture}>
        <View style={styles.container}>
          <ScrollView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Monthly"/>
            </Appbar.Header>

            <View style={styles.header}>
              <View style={{width:100,borderBottomColor:'#cccccc59',borderBottomLeftRadius:20,
      borderBottomRightRadius:20,borderBottomWidth:1,}}>
              <PickMonth
              month={month}
              setMonth={setMonth}/>
              </View>
              <View style={{width:150,borderBottomColor:'#cccccc59',borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      borderBottomWidth:1,}}>
              <PickYear
              year={year}
              setYear={setYear}/>
              </View>
           
              <View style={{width:150,borderBottomColor:'#cccccc59',borderBottomLeftRadius:20,
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

export default monthly;
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

    }
})