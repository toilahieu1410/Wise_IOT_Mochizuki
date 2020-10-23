import React from 'react';
import {View, StyleSheet } from 'react-native';
import { StackedBarChart , XAxis,YAxis, Grid } from 'react-native-svg-charts';
import * as scale from 'd3-scale';

const StackedBarCharts = ({data, keys, colors, dataY}) => {
    return (
        <View style={styles.chart}>
            <YAxis
            data={dataY}
            contentInset={{top: 20, bottom: 20}}
            svg={{
                fill: 'gray',
                fontSize: 10,
            }}
            numberOfTicks={5}
            formatLabel={(value) => `${value}`}
            />
            <View style={{flex: 1}}>
            <StackedBarChart
            style={ { height: 400 } }
            keys={ keys }
            colors={ colors }
            data={ data }
            showGrid={ false }
            contentInset={ { top: 30, bottom: 30 } }>
                <Grid direction={Grid.Direction.HORIZONTAL}/>
            </StackedBarChart>

            </View>
        </View>
    )
}

export default StackedBarCharts;
const styles = StyleSheet.create({
    chart: {
        height: 400,
        flexDirection: 'row',
        padding: 20
    }
})