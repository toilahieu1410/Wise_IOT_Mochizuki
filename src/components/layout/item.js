import { Left,Right } from 'native-base';
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import { ProgressBar } from 'react-native-paper';

function checkData(status, TIME_SHIFT_OFF, TIME_SHIFT_GREEN, TIME_SHIFT_YELLOW,
    TIME_SHIFT_RED, TIME_SHIFT_ERROR, TIME_SHIFT_BREAK, TIME_SHIFT_CHANGE_MOLD){

    if(status === 0) {
        return (
   
        <View style={styles.flex}>
           <View style={{ backgroundColor:'gray',position:'relative',flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:20,borderTopRightRadius:20}}>
               <Text style={{paddingLeft:15,color:'#fff',fontSize:22}}>OFF</Text>
               <Text style={{paddingRight:15,color:'#fff',fontSize:22}}>{TIME_SHIFT_OFF}</Text>
           </View>
       </View>
        )
    } 
    if(status === 10) {
        return (
        <View style={styles.flex}>
            <View style={{ backgroundColor:'green',position:'relative',flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <Text style={{paddingLeft:15,color:'#fff',fontSize:22}}>RUN</Text>
                <Text style={{paddingRight:15,color:'#fff',fontSize:22}}>{TIME_SHIFT_GREEN}</Text>
            </View>
        </View>
        )
    } 
    if(status === 20) {
        return (
        <View style={styles.flex}>
        <View style={{ backgroundColor:'yellow',position:'relative',flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:20,borderTopRightRadius:20}}>
            <Text style={{paddingLeft:15,color:'#000',fontSize:22}}>WAIT</Text>
            <Text style={{paddingRight:15,color:'#000',fontSize:22}}>{TIME_SHIFT_RED}</Text>
        </View>
        </View>
        )
    }
    if(status === 30) {
        return (
        <View style={styles.flex}>
            <View style={{ backgroundColor:'red',position:'relative',flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <Text style={{paddingLeft:15,color:'#000',fontSize:22}}>MISUFIDO</Text>
                <Text style={{paddingRight:15,color:'#000',fontSize:22}}>{TIME_SHIFT_YELLOW}</Text>
            </View>
        </View>
        )
    }
    if(status === 40) {
        return (
            <View style={styles.flex}>
            <View style={{ backgroundColor:'blue',position:'relative',flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <Text style={{paddingLeft:15,color:'#fff',fontSize:22}}>KASUAGARI</Text>
                <Text style={{paddingRight:15,color:'#fff',fontSize:22}}>{TIME_SHIFT_ERROR}</Text>
            </View>
            </View>
        )
    }
    if(status === 50) {
        return (
            <View style={styles.flex}>
            <View style={{ backgroundColor:'orange',position:'relative',flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <Text style={{paddingLeft:15,color:'#fff',fontSize:22}}>MISUFIDO + KASUAGARI</Text>
                <Text style={{paddingRight:15,color:'#fff',fontSize:22}}>{TIME_SHIFT_BREAK}</Text>
            </View>
            </View>
        )
    }
    if(status === 60) {
        return (
            <View style={styles.flex}>
            <View style={{ backgroundColor:'white',position:'relative',flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <Text style={{paddingLeft:15,color:'#000',fontSize:22}}>CHANGE MOLD</Text>
                <Text style={{paddingRight:15,color:'#000',fontSize:22}}>{TIME_SHIFT_CHANGE_MOLD}</Text>
            </View>
            </View>

        )
    }
}
const ItemLayout = ({WDT_USERNAME, uptime, 
                    work_time, TIME_SHIFT_TOTAL, TIME_SHIFT_RUN, 
                    TIME_SHIFT_LOSS, ACTUAL_SHIFT_QTY, CURRENT_STATE, 
                    TIME_SHIFT_OFF, TIME_SHIFT_GREEN, TIME_SHIFT_YELLOW,
                    TIME_SHIFT_RED, TIME_SHIFT_ERROR, TIME_SHIFT_BREAK, TIME_SHIFT_CHANGE_MOLD}) => {
    

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>{WDT_USERNAME}</Text>
            <View style={styles.status}>
           
            {checkData(CURRENT_STATE, TIME_SHIFT_OFF, TIME_SHIFT_GREEN, TIME_SHIFT_YELLOW, 
                            TIME_SHIFT_RED, TIME_SHIFT_ERROR, TIME_SHIFT_BREAK, TIME_SHIFT_CHANGE_MOLD)}
            </View>
            <View style={styles.homeLayout}>
            <Text style={styles.progressNumber}>{uptime}%</Text>
            <ProgressBar progress={uptime / 100} style={styles.progressBar}/>
            <View style={styles.text}>
                <Text style={styles.title}>Planned</Text>
                <Text style={styles.value}>{work_time}</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>Total</Text>
                <Text style={styles.value}>{TIME_SHIFT_TOTAL}</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>Run</Text>
                <Text style={styles.value}>{TIME_SHIFT_RUN}</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>Down</Text>
                <Text style={styles.value}>{TIME_SHIFT_LOSS}</Text>
            </View>
            <View style={styles.production}>
                <Text style={styles.title}>Production</Text>
            
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>Actual Q.Ty</Text>
                <Text style={styles.value}>{ACTUAL_SHIFT_QTY}</Text>
            </View>
            </View>
        </View>
    )
}

export default ItemLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius:20,
        padding: 2,
        backgroundColor: 'rgba(0,0,0, 0.3)',
        margin: 20,
        paddingVertical: 10,
    
    },
    homeLayout: {
        padding:15,
        paddingBottom:5,
    },
    progressNumber: {
        color:'#fff',
        fontSize:26,
        textAlign:'center',
    },
    progressBar: {
        backgroundColor:'gray',
        flex: 1,
        borderRadius:20,
        height:20,
        marginBottom:15,
        color:'#fff'
    },
    status: {
        marginTop:10,
        marginBottom:0,
    },
    textHeader: {
        color:'#fff',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
    },
 
    production: {
        fontWeight:"bold",
        color:'#fff',
        fontSize:22,
        paddingBottom:5,
    },
    text: {
        flex:2,
        flexDirection:"row",
        justifyContent:'space-between',
        marginBottom:10,
    },
 
    title: {
        alignItems:'flex-end',
        justifyContent:'flex-end',
        textTransform:'capitalize',
        color:'#fff',
        fontSize: 22,
    },
    value: {
        color:'#fff',
        fontSize: 22,
    },
  
})

