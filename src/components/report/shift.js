import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ProgressBar, DataTable} from 'react-native-paper';

const TableReportShift = ({dataLength, MACHINE_NAME, DATE, SHIFT, COUNT_GREEN, COUNT_YELLOW, COUNT_ERROR,
    COUNT_BREAK, COUNT_CHANGE_MOLD, COUNT_RED, COUNT_OFF, UPTIME}) => {
    return(
        <DataTable.Row style={[styles.container, {backgroundColor: dataLength % 2 == 0 ? '#11423700' : '#ffffff2e'}]}>
            <DataTable.Cell><Text style={{color:'#fff'}}>{MACHINE_NAME}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{DATE}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{SHIFT}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_GREEN}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_YELLOW}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_ERROR}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_BREAK}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_CHANGE_MOLD}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_RED}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{COUNT_OFF}</Text></DataTable.Cell>
            <DataTable.Cell numeric><Text style={{color:'#fff'}}>{UPTIME}</Text></DataTable.Cell>
        </DataTable.Row>
    )}

export default TableReportShift;
const styles = StyleSheet.create({
    flex: 1,
    // borderBottomColor:'transparent',
    borderBottomWidth:5,
})