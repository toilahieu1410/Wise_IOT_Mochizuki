import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Dimensions } from "react-native";

function checkData(status){
        if(status === 0) {return <Text style={{width:'100%', height:60,borderTopLeftRadius:30/2,borderTopRightRadius:30/2, backgroundColor:'gray'}}></Text>};
        if(status === 10) {return <Text style={{width:'100%', height:60,borderTopLeftRadius:30/2,bordert:30/2, backgroundColor:'green'}}></Text>};
        if(status === 20) {return <Text style={{width:'100%', height:60,borderTopLeftRadius:30/2,borderTopRightRadius:30/2, backgroundColor:'yellow', color:'black'}}></Text>};
        if(status === 30) {return <Text style={{width:'100%', height:60,borderTopLeftRadius:30/2,borderTopRightRadius:30/2, backgroundColor:'red'}}></Text>};
        if(status === 40) {return <Text style={{width:'100%', height:60,borderTopLeftRadius:30/2,borderTopRightRadius:30/2, backgroundColor:'blue'}}></Text>};
        if(status === 50) {return <Text style={{width:'100%', height:60,borderTopLeftRadius:30/2,borderTopRightRadius:30/2, backgroundColor:'orange'}}></Text>};
        if(status === 60) {return <Text style={{width:'100%', height:60,borderTopLeftRadius:30/2,borderTopRightRadius:30/2, backgroundColor:'white'}}></Text>}
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
                <View style={styles.absolute}>
                    <Text style={styles.textHeader}>{WDT_USERNAME}</Text>
                    <Text style={styles.value}>{RUNNING_TIME}</Text>
                </View>
            </View>
                {checkQty(uptime, PERCENT_TARGET)}
                <Text style={styles.percentCenter}>{uptime}%</Text>
              
                <View style={styles.flexPadding}>
                <ProgressBar progress={uptime / 100} style={styles.progressBar}/>
                    <View style={styles.time}>
                        <Text style={styles.title}>Up-Time</Text>
                        <Text style={styles.percent}>{TIME_GREEN}</Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.title}>Down-Time</Text>
                        <Text style={styles.percent}>{TIME_LOSS}</Text>
                    </View>
                </View>
            <View style={styles.flex}>
                <Text style={styles.day}>Last 5 days</Text>
            </View>
        </View>
    )
}
export default Live;

const styles = StyleSheet.create({
    body: {
       flex:1,
     
    },
    flexPadding: {
        paddingLeft:15,
        paddingRight:15,
    },
    time: {
        paddingLeft:20,
        paddingRight:20,
        flex:2,
        flexDirection:"row",
        justifyContent:'space-between',
        marginBottom:10,
    },
    textHeader: {
        color:'#000',
        fontSize: 20,
        right:0,
    },
    title: {
        textTransform:'capitalize',
        color:'#fff',
        textAlign:'left',
        marginLeft: 5,
        fontSize: 20,
    },
    percentCenter: {
        textAlign:'center',
        color:'#fff',
        fontSize: 22,
    },
    percent: {
        color:'#fff',
        fontSize: 20,
    },
    value: {
        fontSize:20,
        color:'#000',
        textAlign:'center',
    },
    absolute: {
        flexDirection:'row',
        position:'absolute',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:50,
        marginRight:50,
    },
    day: {
        color:'#fff',
        textAlign:'center',
        fontSize:18,
    },
    homeLayout: {
        padding:15,
    },
    flex: {
        justifyContent:'center',
        marginBottom:10,
        color:'#000',

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