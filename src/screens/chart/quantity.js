import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const quantity = ({navigation}) => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Quantity"/>
            </Appbar.Header>
        </View>
    )
}

export default quantity;
const styles = StyleSheet.create({
    
})