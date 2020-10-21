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
                <ProgressBar progress={uptime / 100} />
            </View>
        </View>
    )
}

export default ItemLastDay;
const styles = StyleSheet.create({
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
    title: {
        textTransform:'capitalize',
        color:'#fff',
        textAlign:'left',
        marginLeft: 5,
        fontSize: 22,
    },
})