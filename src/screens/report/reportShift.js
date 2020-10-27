import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList, ImageBackground, ScrollView, Dimensions} from 'react-native';
import { Appbar, Button, DataTable, Modal } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getApiReportShift} from '../../redux/report_shift/action';
import moment from 'moment';
import DatePicker from '../../components/timeline/datePicker';
import backgroundScreen from '../../publics/images/background.png';
import TableReportShift from '../../components/report/shift';

const width = Dimensions.get('window').width; //full width
const ReportShift = ({navigation}) => {
    const dispatch = useDispatch();
    const listReportShift = useSelector((store) => store.reportShift.listReportShift);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const convertStartDate = moment(startDate).format('DD/MM/YYYY');
    const convertEndDate = moment(endDate).format('DD/MM/YYYY');
    useEffect(() => {
        dispatch(getApiReportShift(convertStartDate, convertEndDate));
    }, [startDate, endDate]);

    const renderReportShift = useMemo(() => {
        if(listReportShift.length === 0 ) {
            return null;
        }
        return listReportShift;
    }, [listReportShift]);
    if(renderReportShift === null) return null;
    return (
        <ImageBackground source={backgroundScreen} style={styles.picture}>
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Shift"/>
            </Appbar.Header>
            <DatePicker onPress={(text) => setStartDate(text)} style={{color: 'white'}}/>
            <DatePicker onPress={(text) => setEndDate(text)}/>

            <ScrollView  horizontal={true}> 
            <DataTable style={styles.dataTable}>
            <DataTable.Header style={{borderBottomColor:'#fff'}}>
            <DataTable.Title ><Text style={{color:'#fff'}}>Name</Text ></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Date</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Shift</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Run</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Misu</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Kasu</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>M+K</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Change</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Wait</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Off</Text></DataTable.Title>
            <DataTable.Title numeric><Text style={{color:'#fff'}}>Uptime</Text></DataTable.Title>
            </DataTable.Header>

            <FlatList
            data={renderReportShift}
            renderItem={({item, index}) => <TableReportShift
            dataLength={index}
            MACHINE_NAME={item.MACHINE_NAME}
            DATE={item.DATE}
            SHIFT={item.SHIFT}
            COUNT_GREEN={item.COUNT_GREEN}
            COUNT_YELLOW={item.COUNT_YELLOW}
            COUNT_ERROR={item.COUNT_ERROR}
            COUNT_BREAK={item.COUNT_BREAK}
            COUNT_CHANGE_MOLD={item.COUNT_CHANGE_MOLD}
            COUNT_RED={item.COUNT_RED}
            COUNT_OFF={item.COUNT_OFF}
            UPTIME={item.UPTIME}
            />}
            />

        </DataTable>
        </ScrollView>
        </View>
        </ImageBackground>
    )
}

export default ReportShift;
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
        overflow:'scroll',
        width:width,
    },
})