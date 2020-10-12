import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LiveScreen = () => {
    return (
        <View style={styles.container}>
            <Text>LiveScreen</Text>
        </View>
    )
}

export default LiveScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})