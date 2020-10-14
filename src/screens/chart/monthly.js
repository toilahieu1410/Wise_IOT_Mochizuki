import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const monthly = ({navigation}) => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Monthly"/>
            </Appbar.Header>
        </View>
    )
}

export default monthly;
const styles = StyleSheet.create({
    
})