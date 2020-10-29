import React from 'react';
import {View, StyleSheet } from 'react-native';
import { BarChart, XAxis,YAxis, Grid } from 'react-native-svg-charts';
import * as scale from 'd3-scale';

const BarCharts = ({data, dataX}) => {
    return (
        <View style={styles.chart}>
            <YAxis
            data={data}
            contentInset={{top: 20, bottom: 20}}
            svg={{
                fill: '#ffffff',
                fontSize: 10,
            }}
            numberOfTicks={5}
            formatLabel={(value) => `${value}`}
            />
            <View style={{flex: 1}}>
            <BarChart
                style={{ flex: 1 }}
                data={data}
                svg={{ fill: '#168e98' }}
                contentInset={{ top: 10, bottom: 10 }}
                spacing={0.2}
                gridMin={0}
            >
                <Grid direction={Grid.Direction.HORIZONTAL}/>
            </BarChart>

            <XAxis
                style={{ marginHorizontal: -5 }}
                data={data}
                formatLabel={(value, index) => dataX[index]}
                contentInset={{left: 10, right: 10}}
                svg={{ fontSize: 10, fill: '#ffffff' }}
            />
            </View>
        </View>
    )
}
export default BarCharts;
const styles = StyleSheet.create({
    chart: {
        height: 400,
        flexDirection: 'row',
        padding: 20
    }
})