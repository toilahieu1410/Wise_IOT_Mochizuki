import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ProgressBar } from 'react-native-paper';

function checkData(status, TIME_SHIFT_OFF, TIME_SHIFT_GREEN, TIME_SHIFT_YELLOW,
    TIME_SHIFT_RED, TIME_SHIFT_ERROR, TIME_SHIFT_BREAK, TIME_SHIFT_CHANGE_MOLD){
    if(status === 0) {
        return (
        <View style={styles.flex}>
        <Text style={styles.title}>OFF</Text>
        <Text style={styles.value}>{TIME_SHIFT_OFF}</Text>
        <Text style={{width:20, height:20,borderRadius:44/2, backgroundColor:'gray'}}></Text>
        </View>
        )
    } 
    if(status === 10) {
        return (
        <View style={styles.flex}>
        <Text style={styles.title}>RUN</Text>
        <Text style={styles.value}>{TIME_SHIFT_GREEN}</Text>
        <Text style={{width:20, height:20,borderRadius:44/2, backgroundColor:'green'}}></Text>
        </View>
        )
    } 
    if(status === 20) {
        return (
        <View style={styles.flex}>
        <Text style={styles.title}>WAIT</Text>
        <Text style={styles.value}>{TIME_SHIFT_RED}</Text>
        <Text style={{width:20, height:20,borderRadius:44/2, backgroundColor:'yellow'}}></Text>
        </View>
        )
    }
    if(status === 30) {
        return (
        <View style={styles.flex}>
        <Text style={styles.title}>MISUFIDO</Text>
        <Text style={styles.value}>{TIME_SHIFT_YELLOW}</Text>
        <Text style={{width:20, height:20,borderRadius:44/2, backgroundColor:'red'}}></Text>
        </View>
        )
    }
    if(status === 40) {
        return (
        <View style={styles.flex}>
        <Text style={styles.title}>KASUAGARI</Text>
        <Text style={styles.value}>{TIME_SHIFT_ERROR}</Text>
        <Text style={{width:20, height:20,borderRadius:44/2, backgroundColor:'blue'}}></Text>
        </View>
        )
    }
    if(status === 50) {
        return (
        <View style={styles.flex}>
        <Text style={styles.title}>MISUFIDO + KASUAGARI</Text>
        <Text style={styles.value}>{TIME_SHIFT_BREAK}</Text>
        <Text style={{width:20, height:20,borderRadius:44/2, backgroundColor:'orange'}}></Text>
        </View>
        )
    }
    if(status === 60) {
        return (
        <View style={styles.flex}>
        <Text style={styles.title}>CHANGE MOLD</Text>
        <Text style={styles.value}>{TIME_SHIFT_CHANGE_MOLD}</Text>
        <Text style={{width:20, height:20,borderRadius:44/2, backgroundColor:'white'}}></Text>
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

            <View style={styles.homeLayout}>
            <View>
            {checkData(CURRENT_STATE, TIME_SHIFT_OFF, TIME_SHIFT_GREEN, TIME_SHIFT_YELLOW, 
                            TIME_SHIFT_RED, TIME_SHIFT_ERROR, TIME_SHIFT_BREAK, TIME_SHIFT_CHANGE_MOLD)}
            </View>
                <Text style={styles.value}>{uptime}%</Text>
            <ProgressBar progress={uptime / 100} />
            <View style={styles.flex}>
                <Text style={styles.title}>Planned</Text>
                <Text style={styles.value}>{work_time}</Text>
            </View>
            <View style={styles.flex}>
                <Text style={styles.title}>Total</Text>
                <Text style={styles.value}>{TIME_SHIFT_TOTAL}</Text>
            </View>
            <View style={styles.flex}>
                <Text style={styles.title}>Run</Text>
                <Text style={styles.value}>{TIME_SHIFT_RUN}</Text>
            </View>
            <View style={styles.flex}>
                <Text style={styles.title}>Down</Text>
                <Text style={styles.value}>{TIME_SHIFT_LOSS}</Text>
            </View>
            <View style={styles.production}>
                <Text style={styles.title}>Production</Text>
            
            </View>
            <View style={styles.flex}>
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
        padding: 7,
        justifyContent:'space-evenly',
        alignItems: 'center',
        backgroundColor: '#736a6a82',
        margin: 20
    },
    textHeader: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
    },
    flex: {
        flexDirection: 'row',
        marginBottom:10,
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
    value: {
        marginRight: 5,
        fontSize: 22,
        marginLeft: 20
    },
    homeLayout: {
        padding:15,
    },
})

