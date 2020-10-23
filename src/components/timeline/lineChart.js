import React from 'react';
import {View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import * as scale from 'd3-scale';

const LineCharts = ({dataLineChart}) =>{
    return (
        <View>
            <LineChart
            style={ { height: 200 } }
            data={ dataLineChart }
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={ { top: 20, bottom: 20 } }
        />
        </View>
        
    )
}

export default LineCharts;