import React from 'react';

import {View, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const TimelineScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="TimeLine"/>
                <Appbar.Action icon='dots-vertical' onPress={() => {}} />
            </Appbar.Header>

            <Button
                icon="view-grid-plus-outline"
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate('Daily')}>
                Daily
            </Button>

            <Button
                icon="view-grid-plus-outline"
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate('Weekly')}>
                Weekly
            </Button>

            <Button
                icon="view-grid-plus-outline"
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate('Monthly')}>
                Monthly
            </Button>

            <Button
                icon="view-grid-plus-outline"
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate('Quantity')}>
                Quantity
            </Button>

        </View>
    )
}

export default TimelineScreen;

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