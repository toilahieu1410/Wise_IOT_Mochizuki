import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Dimensions } from "react-native";

function checkData(status){
        if(status === 0) {return <View style={{width:20, height:20,borderRadius:40/2, backgroundColor:'gray'}}></View>};
        if(status === 10) {return <Text style={{width:20, height:20,borderRadius:40/2, backgroundColor:'green'}}></Text>};
        if(status === 20) {return <View style={{width:100,position:'relative',flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:10,borderTopRightRadius:10, backgroundColor:'yellow'}}></View>};
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
            <View style={styles.flex}>
            {checkData(CURRENT_STATE)}
                <Text style={styles.textHeader}>{WDT_USERNAME}</Text>
                <Text style={styles.value}>{RUNNING_TIME}</Text>
            </View>
                {checkQty(uptime, PERCENT_TARGET)}

                <Text style={styles.value}>{uptime}%</Text>
                <ProgressBar progress={uptime / 100} style={styles.progressBar}/>
                <View style={styles.flex}>
                    <View style={styles.time}>
                    <Text style={styles.title}>Up-Time</Text>
                    <Text style={styles.value}>{TIME_GREEN}</Text>
                    </View>
                    <View style={styles.time}>
                    <Text style={styles.title}>Down-Time</Text>
                        <Text style={styles.value}>{TIME_LOSS}</Text>
                    </View>
                </View>
                <View style={styles.flex}><Text style={styles.day}>Last 5 days</Text></View>
        </View>
    )
}
export default Live;

const styles = StyleSheet.create({
    body: {
       flex:1,
    
       
    },
    time: {
    
        flex:2,
        flexDirection:"row",
        justifyContent:'space-between',
        marginBottom:10,
    },
    textHeader: {
        color:'#fff',
        fontSize: 20,
    },
    title: {
        textTransform:'capitalize',
        color:'#fff',
        textAlign:'left',
        marginLeft: 5,
        fontSize: 22,
    },
    value: {
        fontSize: 22,
        color:'#fff',
        textAlign:'center',
    },
    day: {
        color:'#fff',
    },
    homeLayout: {
        padding:15,
    },
    flex: {
        marginBottom:10,
        color:'#fff',
       
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
  
    progressBar: {
        backgroundColor:'gray',
        flex: 1,
        height:10,
        marginBottom:15,
        color:'#fff'
    },
})