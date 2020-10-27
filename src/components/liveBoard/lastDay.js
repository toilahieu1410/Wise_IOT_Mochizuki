import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ProgressBar } from 'react-native-paper';

const ItemLastDay = ({TEN_NGAY, TIME_GREEN, uptime}) => {
    return (
        <View style={styles.container}>
            <View style={styles.homeLayout}>
                <View style={styles.flex}>
                    <Text style={styles.title}>{TEN_NGAY}</Text>
                    <Text style={styles.value}>{TIME_GREEN}</Text>
                
                    <Text style={styles.value}>{uptime}%</Text>
                </View>
                <ProgressBar progress={uptime / 100} style={styles.progressBar}/>
            </View>
        </View>
    )
}

export default ItemLastDay;
const styles = StyleSheet.create({
    value: {
        fontSize: 22,
        marginLeft: 20,
        color:'#fff',
    },
    homeLayout: {
        padding:15,
    },
    flex: {
        flexDirection: 'row',
        justifyContent:'center'
    },
    title: {
        textTransform:'capitalize',
        color:'#fff',
        textAlign:'left',
        marginLeft: 5,
        fontSize: 22,
    },
    progressBar: {
        backgroundColor:'gray',
        flex: 1,
        borderRadius:20,
        height:5,
        marginBottom:15,
        color:'#fff'
    },
})