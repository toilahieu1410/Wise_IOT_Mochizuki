import React from 'react';

import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import backgroundScreen from '../../publics/images/background.png';
import logoDaily from '../../publics/images/icon/img-daily.png';
import logoWeekly from '../../publics/images/icon/img-weekly.png';
import logoQuantity from '../../publics/images/icon/img-quantity.png';
import logoMonthly from '../../publics/images/icon/img-monthly.png';
const TimelineScreen = ({navigation}) => {
  return (
    <ImageBackground source={backgroundScreen} style={styles.picture}>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="TimeLine" />
        </Appbar.Header>
        <View style={styles.timeline}>
          <View style={styles.boxTimeline}>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Quantity')}>
              <Image source={logoQuantity} />
            </Button>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Daily')}>
              <Image source={logoDaily} size={25} />
            </Button>
          </View>
          <View style={styles.boxTimeline}>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Weekly')}>
              <Image source={logoWeekly} style={styles.logoMonthly} />
            </Button>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Monthly')}>
              <Image source={logoMonthly} 
                      style={styles.logoMonthly} />
            </Button>
          </View>
        </View>
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
    width: 120,
    height: 120,
    margin: 15,
    justifyContent: 'center',
  },
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },

  logoMonthly: {
    padding: 10,
    margin: 5,
    height: 200,
    width: 200,
    resizeMode: 'stretch',
  },
});
