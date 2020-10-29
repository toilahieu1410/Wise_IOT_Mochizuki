import React from 'react';

import {View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Text} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import backgroundScreen from '../../publics/images/background.png';
const TimelineScreen = ({navigation}) => {
  return (
    <ImageBackground source={backgroundScreen} style={styles.picture}>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="TimeLine" />
        </Appbar.Header>
        <ScrollView>
        <View style={styles.timeline}>
          <View style={styles.boxTimeline}>
            <TouchableOpacity
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Quantity')}>
              <Text style={styles.textBtn}>Quantity</Text>
            </TouchableOpacity>
            <TouchableOpacity
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Daily')}>
              <Text style={styles.textBtn}>Daily</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxTimeline}>
            <TouchableOpacity
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Weekly')}>
              <Text style={styles.textBtn}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Monthly')}>
              <Text style={styles.textBtn}>Monthly</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default TimelineScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282f3ac7',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position:'absolute',
  },
  timeline: {
    alignItems: 'center',
  },
  boxTimeline: {
    flexDirection: 'row',
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
});
