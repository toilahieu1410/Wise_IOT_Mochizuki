import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

const TableReportHour = ({dataLength, MACHINE_NAME, HOUR, COUNT_GREEN, COUNT_YELLOW, COUNT_ERROR,
    COUNT_BREAK, COUNT_CHANGE_MOLD, COUNT_RED, COUNT_OFF, UPTIME, TIME_GREEN, TIME_YELLOW, TIME_ERROR, TIME_BREAK,
    TIME_CHANGE_MOLD, TIME_RED, TIME_OFF}) => {
    return (
        <View>
        <DataTable.Row style={[styles.container, {backgroundColor: dataLength % 2 == 0 ? '#11423700' : '#ffffff2e'}]}>
            <DataTable.Cell><Text style={{color:'#fff'}}>{MACHINE_NAME}</Text></DataTable.Cell>
            <DataTable.Cell numeric style={{justifyContent:'center'}}><Text style={{color:'#fff'}}>{COUNT_GREEN}</Text></DataTable.Cell>
            <DataTable.Cell numeric style={{justifyContent:'center'}}><Text style={{color:'#fff'}}>{COUNT_YELLOW}</Text></DataTable.Cell>
            <DataTable.Cell numeric style={{justifyContent:'center'}}><Text style={{color:'#fff'}}>{COUNT_ERROR}</Text></DataTable.Cell>
            <DataTable.Cell numeric style={{justifyContent:'center'}}><Text style={{color:'#fff'}}>{COUNT_BREAK}</Text></DataTable.Cell>
            <DataTable.Cell numeric style={{justifyContent:'center'}}><Text style={{color:'#fff'}}>{COUNT_CHANGE_MOLD}</Text></DataTable.Cell>
            <DataTable.Cell numeric style={{justifyContent:'center'}}><Text style={{color:'#fff'}}>{COUNT_RED}</Text></DataTable.Cell>
            <DataTable.Cell numeric style={{justifyContent:'center'}}><Text style={{color:'#fff'}}>{COUNT_OFF}</Text></DataTable.Cell>
            <DataTable.Cell numeric style={{justifyContent:'center'}}><Text style={{color:'#fff'}}>{UPTIME}</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={[styles.container, {backgroundColor: dataLength % 2 == 0 ? '#11423700' : '#ffffff2e'}]}>
            <DataTable.Cell><Text style={{color:'#fff'}}>{HOUR}</Text></DataTable.Cell>
            <DataTable.Cell ><Text style={{color:'#fff'}}>{TIME_GREEN}</Text></DataTable.Cell>
            <DataTable.Cell ><Text style={{color:'#fff'}}>{TIME_YELLOW}</Text></DataTable.Cell>
            <DataTable.Cell ><Text style={{color:'#fff'}}>{TIME_ERROR}</Text></DataTable.Cell>
            <DataTable.Cell ><Text style={{color:'#fff'}}>{TIME_BREAK}</Text></DataTable.Cell>
            <DataTable.Cell ><Text style={{color:'#fff'}}>{TIME_CHANGE_MOLD}</Text></DataTable.Cell>
            <DataTable.Cell ><Text style={{color:'#fff'}}>{TIME_RED}</Text></DataTable.Cell>
            <DataTable.Cell ><Text style={{color:'#fff'}}>{TIME_OFF}</Text></DataTable.Cell>
            <DataTable.Cell ><Text style={{color:'#fff'}}></Text></DataTable.Cell>
        </DataTable.Row>
        </View>
    )
}

export default TableReportHour;
const styles = StyleSheet.create({
    flex: 1,
})