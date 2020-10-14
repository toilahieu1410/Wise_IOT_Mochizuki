import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ItemLayout = () => {
    return (
        <View style={styles.container}>
                <Text style={styles.textHeader}>PM07</Text>
        </View>
    )
}

export default ItemLayout;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 7,
        alignItems: 'center',
        backgroundColor: '#736a6a82',
        margin: 20
    },
    textHeader: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20
    },
})