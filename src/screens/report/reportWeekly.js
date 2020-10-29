import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ImageBackground, ScrollView, Dimensions} from 'react-native';
import { Appbar, DataTable } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getApiReportWeekly} from '../../redux/report_weekly/action';
import moment from 'moment';
import DatePicker from '../../components/timeline/datePicker';
import backgroundScreen from '../../publics/images/background.png';
import TableReportWeekly from '../../components/report/weekly';

const width = Dimensions.get('window').width; //full width
const ReportWeekly = ({navigation}) => {
    const dispatch = useDispatch();
    const listReportWeekly = useSelector((store) => store.reportWeekly.listReportWeekly);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const convertStartDate = moment(startDate).format('DD/MM/YYYY');
    const convertEndDate = moment(endDate).format('DD/MM/YYYY');
    useEffect(() => {
        dispatch(getApiReportWeekly(convertStartDate, convertEndDate));
    }, [startDate, endDate])
    return (
        <ImageBackground source={backgroundScreen} style={styles.picture}>
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Weekly"/>
            </Appbar.Header>
            <View style={styles.datePicker}>
                <DatePicker onPress={(text) => setStartDate(text)}/>
                <Text style={styles.space}>-</Text>
                <DatePicker onPress={(text) => setEndDate(text)}/>
            </View>
            <ScrollView  horizontal={true}>
            <DataTable style={styles.dataTable}>
            <DataTable.Header style={{borderBottomColor:'#fff'}}>
            <DataTable.Title style={{justifyContent:'center',textAlign: 'center'}}><Text style={{color:'#fff'}}>Name</Text ></DataTable.Title>
            <DataTable.Title numeric style={{justifyContent:'center',textAlign: 'center'}}><Text style={{color:'#fff'}}>Date</Text></DataTable.Title>
            <DataTable.Title numeric style={{justifyContent:'center',textAlign: 'center'}}><Text style={{color:'#fff'}}>Run</Text></DataTable.Title>
            <DataTable.Title numeric style={{justifyContent:'center',textAlign: 'center'}}><Text style={{color:'#fff'}}>Misu</Text></DataTable.Title>
            <DataTable.Title numeric style={{justifyContent:'center',textAlign: 'center'}}><Text style={{color:'#fff'}}>Kasu</Text></DataTable.Title>
            <DataTable.Title numeric style={{justifyContent:'center',textAlign: 'center'}}><Text style={{color:'#fff'}}>M+K</Text></DataTable.Title>
            <DataTable.Title numeric style={{justifyContent:'center',textAlign: 'center'}}><Text style={{color:'#fff'}}>Change</Text></DataTable.Title>
            <DataTable.Title numeric style={{justifyContent:'center',textAlign: 'center'}}><Text style={{color:'#fff'}}>Wait</Text></DataTable.Title>
            <DataTable.Title numeric style={{justifyContent:'center',textAlign: 'center'}}><Text style={{color:'#fff'}}>Off</Text></DataTable.Title>
            <DataTable.Title numeric style={{justifyContent:'center',textAlign: 'center'}}><Text style={{color:'#fff'}}>Uptime</Text></DataTable.Title>
            </DataTable.Header>

            <FlatList
            data={listReportWeekly}
            renderItem={({item, index}) => <TableReportWeekly
            dataLength={index}
            MACHINE_NAME={item.MACHINE_NAME}
            BEGIN_DATETIME={moment(item.BEGIN_DATETIME).format('DD/MM')}
            END_DATETIME={moment(item.END_DATETIME).format('DD/MM')}
            COUNT_GREEN={item.COUNT_GREEN}
            COUNT_YELLOW={item.COUNT_YELLOW}
            COUNT_ERROR={item.COUNT_ERROR}
            COUNT_BREAK={item.COUNT_BREAK}
            COUNT_CHANGE_MOLD={item.COUNT_CHANGE_MOLD}
            COUNT_RED={item.COUNT_RED}
            COUNT_OFF={item.COUNT_OFF}
            UPTIME={item.UPTIME}
            TIME_GREEN={item.TIME_GREEN}
            TIME_YELLOW={item.TIME_YELLOW}
            TIME_ERROR={item.TIME_ERROR}
            TIME_BREAK={item.TIME_BREAK}
            TIME_CHANGE_MOLD={item.TIME_CHANGE_MOLD}
            TIME_RED={item.TIME_RED}
            TIME_OFF={item.TIME_OFF}
            />}
            />

        </DataTable>
        </ScrollView>
        </View>
        </ImageBackground>
    )
}

export default ReportWeekly;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282f3ac7',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    dataTable: {
        overflow: 'scroll',
        width: 750,
    },
    datePicker: {
        flexDirection:'row',
        justifyContent:'center',
    },
    space: {
        color:'#fff',
        marginLeft:3,
        marginRight:3,
        alignItems:'center',
        justifyContent:'center',
        marginTop:0,
        fontSize:24,
    }
})