import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { logOut} from '../../redux/auth/action';

const ReportScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const profile = useSelector((store) => store.auth.isLoggedIn);
    const accountUse = useSelector((store) => store.auth.accountUse);

    return (
        <View style={styles.container}>
            <ScrollView>
            <Appbar.Header>
                <Appbar.Content title="Report"/>
                <Appbar.Action icon='logout' onPress={() => dispatch(logOut())} />
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
        </ScrollView>
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