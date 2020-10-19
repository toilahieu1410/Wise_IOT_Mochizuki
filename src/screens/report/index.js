import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const ReportScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Report"/>
                <Appbar.Action icon='dots-vertical' onPress={() => {}} />
            </Appbar.Header>

        <Button
            icon="view-grid-plus-outline"
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('ReportShift')}>
            Shift
        </Button>
        <Button
            icon="view-grid-plus-outline"
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('ReportHour')}>
            Hour
        </Button>
        <Button
            icon="view-grid-plus-outline"
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('ReportDaily')}>
            Daily
        </Button>
        <Button
            icon="view-grid-plus-outline"
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('ReportWeekly')}>
            Weekly
        </Button>
        <Button
            icon="view-grid-plus-outline"
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('ReportMonthly')}>
            Monthly
        </Button>

        </View>

        
    )
}

export default ReportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        width: 200,
        margin: 15,
        justifyContent: 'center'
    }
})