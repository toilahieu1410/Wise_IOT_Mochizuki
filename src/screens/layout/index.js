import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LayoutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>LayoutScreen</Text>
        </View>
    )
}

export default LayoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})