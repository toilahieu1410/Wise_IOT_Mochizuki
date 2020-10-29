import React from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { logOut} from '../../redux/auth/action';
import backgroundScreen from '../../publics/images/background.png';
const ReportScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const profile = useSelector((store) => store.auth.isLoggedIn);
    const accountUse = useSelector((store) => store.auth.accountUse);

    return (
        <ImageBackground source={backgroundScreen} style={styles.picture}>
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Report"/>
                <Appbar.Action icon='logout' onPress={() => dispatch(logOut())} />
            </Appbar.Header>
        <ScrollView>
        <View style={styles.timeline}>
        <View style={styles.boxTimeline}>
        <TouchableOpacity
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('ReportShift')}>
            <Text style={styles.textBtn}>Shift</Text>
        </TouchableOpacity>
        <TouchableOpacity
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('ReportHour')}>
            <Text style={styles.textBtn}>Hour</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.boxTimeline}>
        <TouchableOpacity
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('ReportDaily')}>
            <Text style={styles.textBtn}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('ReportWeekly')}>
            <Text style={styles.textBtn}>Weekly</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.boxTimeline}>
        <TouchableOpacity
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate('ReportMonthly')}>
            <Text style={styles.textBtn}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity
            mode="contained"
            style={styles.button1}
            >
            <Text style={styles.textBtn}></Text>
        </TouchableOpacity>
        </View>

        </View>
        </ScrollView>
        </View>
        </ImageBackground>
    )
}

export default ReportScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282f3ac7',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position:'absolute',
    },
    button: {
        borderRadius:10,
        padding:8,
        width: 120,
        height: 120,
        marginTop: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#106b6999',
    },
    button1: {
        backgroundColor:'transparent',
        width: 120,
        height: 120,
        marginTop: 30,
        marginRight: 30,
    },
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
      },
      textBtn: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 25,
        textAlign: 'center',
      },
      timeline: {
          alignItems: 'center',
          
      },
      boxTimeline: {
        flexDirection: 'row',
      }
})