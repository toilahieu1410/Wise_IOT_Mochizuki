import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProgressBar} from 'react-native-paper';

const ItemLastDay = ({TEN_NGAY, TIME_GREEN, uptime}) => {
  return (
    <View style={styles.container}>
      <View style={styles.homeLayout}>
        <View style={styles.flex}>
          <Text style={styles.title}>{TEN_NGAY}</Text>
          <Text style={styles.value}>{TIME_GREEN}</Text>

          <Text style={styles.percent}>{uptime}%</Text>
        </View>
        <ProgressBar progress={uptime / 100} style={styles.progressBar} />
      </View>
    </View>
  );
};

export default ItemLastDay;
const styles = StyleSheet.create({
  value: {
    height: 30,
    lineHeight: 30,
    color:'#fff',
    fontSize:18,
  },
  homeLayout: {
    padding: 10,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textTransform: 'capitalize',
    color: '#fff',
    paddingLeft: 60,
    fontSize: 18,
    width:100,
  },
  percent: {
    paddingRight: 60,
    fontSize: 18,
    color: '#fff',
    width:130,
  },
  progressBar: {
    backgroundColor: 'gray',
    flex: 1,
    borderRadius: 20,
    height: 5,
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30,
    color: '#fff',
  },
});
