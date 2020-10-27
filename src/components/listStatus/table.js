import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ProgressBar, DataTable} from 'react-native-paper';

function checkData(status, WDT_USERNAME){
    if(status === 0){return <DataTable.Cell style={{backgroundColor: 'gray', justifyContent: 'center'}}>{WDT_USERNAME}</DataTable.Cell>}
    if(status === 10){return <DataTable.Cell style={{backgroundColor: 'green', justifyContent: 'center'}}>{WDT_USERNAME}</DataTable.Cell>}
    if(status === 20){return <DataTable.Cell style={{backgroundColor: 'yellow', justifyContent: 'center'}}>{WDT_USERNAME}</DataTable.Cell>}
    if(status === 30){return <DataTable.Cell style={{backgroundColor: 'red', justifyContent: 'center'}}>{WDT_USERNAME}</DataTable.Cell>}
    if(status === 40){return <DataTable.Cell style={{backgroundColor: 'blue', justifyContent: 'center'}}>{WDT_USERNAME}</DataTable.Cell>}
    if(status === 50){return <DataTable.Cell style={{backgroundColor: 'orange', justifyContent: 'center'}}>{WDT_USERNAME}</DataTable.Cell>}
    if(status === 60){return <DataTable.Cell style={{backgroundColor: 'white', justifyContent: 'center'}}>{WDT_USERNAME}</DataTable.Cell>}
}

const ListTable = ({WDT_USERNAME, COUNT_SHIFT_GREEN, COUNT_SHIFT_YELLOW, COUNT_SHIFT_ERROR, 
    COUNT_SHIFT_BREAK, COUNT_SHIFT_CHANGE_MOLD, COUNT_SHIFT_RED, COUNT_SHIFT_OFF, uptime, CURRENT_STATE, dataLength}) => {
        
    return (
        <DataTable.Row style={[styles.container, {backgroundColor: dataLength % 2 == 0 ? '#11423700' : '#ffffff2e'}]}>
            {checkData(CURRENT_STATE, WDT_USERNAME)}
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_SHIFT_GREEN}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_SHIFT_YELLOW}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_SHIFT_ERROR}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_SHIFT_BREAK}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_SHIFT_CHANGE_MOLD}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_SHIFT_RED}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_SHIFT_OFF}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{uptime}</Text></DataTable.Cell>
        </DataTable.Row>
    )}
export default ListTable;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor:'transparent',
        borderBottomWidth:5,
    },
})