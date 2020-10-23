import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ProgressBar } from 'react-native-paper';

function checkData(status){
        if(status === 0) {return <Text style={{width:20, height:20,borderRadius:40/2, backgroundColor:'gray'}}></Text>};
        if(status === 10) {return <Text style={{width:20, height:20,borderRadius:40/2, backgroundColor:'green'}}></Text>};
        if(status === 20) {return <Text style={{width:20, height:20,borderRadius:40/2, backgroundColor:'yellow'}}></Text>};
        if(status === 30) {return <Text style={{width:20, height:20,borderRadius:40/2, backgroundColor:'red'}}></Text>};
        if(status === 40) {return <Text style={{width:20, height:20,borderRadius:40/2, backgroundColor:'blue'}}></Text>};
        if(status === 50) {return <Text style={{width:20, height:20,borderRadius:40/2, backgroundColor:'orange'}}></Text>};
        if(status === 60) {return <Text style={{width:20, height:20,borderRadius:40/2, backgroundColor:'white'}}></Text>}
    }

function checkQty(upTime, percentTarget){
    if(upTime < percentTarget){
        return (
            <View style={styles.circle}>
                <Text style={{width:70, height:70,borderRadius:140/2, 
                    backgroundColor:'red', position:'relative',
                    textAlign: 'center', textAlignVertical:'center', color:'white'}}>
                    BAD
                </Text>
            </View>
        )
    }
    if(upTime >= percentTarget) {
        return (
            <View style={styles.circle}>
                <Text style={{width:70, height:70,borderRadius:140/2, 
                    backgroundColor:'green', position:'relative',
                    textAlign: 'center', textAlignVertical:'center', color:'white'}}>
                    GOOD
                </Text>
            </View>
        )}
}

const Live = ({WDT_USERNAME, RUNNING_TIME, CURRENT_STATE, uptime, PERCENT_TARGET, TIME_GREEN, TIME_LOSS}) => {
    return (
        <View style={styles.body}>
        <Text style={styles.textHeader}>{WDT_USERNAME}</Text>
            <View style={styles.flex}>
                    <Text style={styles.value}>{RUNNING_TIME}</Text>
                    {checkData(CURRENT_STATE)}
                </View>
                {checkQty(uptime, PERCENT_TARGET)}

                <Text style={styles.value}>{uptime}%</Text>
                <ProgressBar progress={uptime / 100}/>

                <View style={styles.flex}>
                    <Text style={styles.title}>Up-Time</Text>
                <Text style={styles.value}>{TIME_GREEN}</Text>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.title}>Down-Time</Text>
                    <Text style={styles.value}>{TIME_LOSS}</Text>
                </View>
                <View style={styles.flex}><Text>Last 5 days</Text></View>
        </View>
    )
}
export default Live;

const styles = StyleSheet.create({
    textHeader: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
    },
    value: {
        marginRight: 5,
        fontSize: 22,
        marginLeft: 20
    },
    homeLayout: {
        padding:15,
    },
    flex: {
        flexDirection: 'row',
        justifyContent:'center'
    },
    circle: {
        flexDirection: 'row',
        marginBottom:10,
        justifyContent:'center'
    },
    production: {
        fontWeight:"bold",
        color:'#fff',
        fontSize:22,

    },
    title: {
        textTransform:'capitalize',
        color:'#fff',
        textAlign:'left',
        marginLeft: 5,
        fontSize: 22,
    },
})