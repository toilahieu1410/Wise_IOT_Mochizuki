import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Appbar } from 'react-native-paper';
import {getApiQuantityChart} from '../../redux/timeline_quantity/action';
import DatePicker from '../../components/timeline/datePicker';
import moment from 'moment';
import BarCharts from '../../components/timeline/barChart';
import PickDevices from '../../components/timeline/pickMcid';
import backgroundScreen from '../../publics/images/background.png';

const dataX = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5];
const quantity = ({navigation}) => {
    const dispatch = useDispatch();
    const listTimelineQuantity = useSelector((store) => store.timeline_quantity.listTimelineQuantity);
    const [date, setDate] = useState(new Date());
    const [mcid, setMcid] = useState(1);
    const dateTime = moment(date).format('DD/MM/YYYY');
    useEffect(() => {
        dispatch(getApiQuantityChart(dateTime, mcid))
    }, [mcid, dateTime])

    const data = listTimelineQuantity;

    return (
        <ImageBackground source={backgroundScreen} style={styles.picture}>
        <View style={styles.container}>
            <ScrollView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Quantity"/>
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
         
         
            <BarCharts
            data={data}
            dataX={dataX}
            />
            </ScrollView>
        </View>
        </ImageBackground>
    )
}

export default quantity;
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