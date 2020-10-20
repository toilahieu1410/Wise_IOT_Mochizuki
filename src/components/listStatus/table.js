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
    COUNT_SHIFT_BREAK, COUNT_SHIFT_CHANGE_MOLD, COUNT_SHIFT_RED, COUNT_SHIFT_OFF, uptime, CURRENT_STATE}) => {
        
    return (
            <DataTable.Row>
            {checkData(CURRENT_STATE, WDT_USERNAME)}
            <DataTable.Cell numeric>{COUNT_SHIFT_GREEN}</DataTable.Cell>
            <DataTable.Cell numeric>{COUNT_SHIFT_YELLOW}</DataTable.Cell>
            <DataTable.Cell numeric>{COUNT_SHIFT_ERROR}</DataTable.Cell>
            <DataTable.Cell numeric>{COUNT_SHIFT_BREAK}</DataTable.Cell>
            <DataTable.Cell numeric>{COUNT_SHIFT_CHANGE_MOLD}</DataTable.Cell>
            <DataTable.Cell numeric>{COUNT_SHIFT_RED}</DataTable.Cell>
            <DataTable.Cell numeric>{COUNT_SHIFT_OFF}</DataTable.Cell>
            <DataTable.Cell numeric>{uptime}</DataTable.Cell>
            
            </DataTable.Row>
    )}
export default ListTable;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
})