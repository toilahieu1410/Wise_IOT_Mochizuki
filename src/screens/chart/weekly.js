import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const weekly = ({navigation}) => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Weekly"/>
            </Appbar.Header>
        </View>
    )
}

export default weekly;
const styles = StyleSheet.create({
    
})