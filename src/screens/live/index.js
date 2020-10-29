import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Appbar} from 'react-native-paper';
import {
  getApiLiveBoardTime,
  getApiLast5Day,
} from '../../redux/liveBoard/action';
import backgroundScreen from '../../publics/images/background.png';
import Live from '../../components/liveBoard/live';
import ItemLastDay from '../../components/liveBoard/lastDay';
import PickDevices from '../../components/timeline/pickMcid';

const LiveScreen = () => {
  const dispatch = useDispatch();
  const listLiveBoardTime = useSelector(
    (store) => store.liveBoard.listLiveBoardTime,
  );
  const listLiveBoardLastDay = useSelector(
    (store) => store.liveBoard.listLiveBoardLastDay,
  );
  const [mcid, setMcid] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getApiLiveBoardTime(mcid));
      dispatch(getApiLast5Day(mcid));
    }, 1000);
    return () => clearInterval(interval);
  }, [mcid]);

  function convertTime(time) {
    return new Date(time * 1000).toISOString().substr(11, 8);
  }

  return (
    <ImageBackground source={backgroundScreen} style={styles.picture}>
      <View style={styles.container}>
        <View style={styles.toolBar}>
          <Appbar.Header>
            <Appbar.Content title="Live Board" />
          </Appbar.Header>
        </View>
        <ScrollView>
            <View style={styles.dropdown}>
            <PickDevices devices={mcid} setDevices={setMcid} />
            </View>
       
          <View style={styles.body}>
            <FlatList
              data={listLiveBoardTime}
              renderItem={({item}) => (
                <Live
                  WDT_USERNAME={item.WDT_USERNAME}
                  RUNNING_TIME={convertTime(item.RUNNING_TIME)}
                  CURRENT_STATE={item.CURRENT_STATE}
                  uptime={item.uptime}
                  PERCENT_TARGET={item.PERCENT_TARGET}
                  TIME_GREEN={convertTime(item.TIME_GREEN)}
                  TIME_LOSS={convertTime(item.TIME_LOSS)}
                />
              )}
            />

            <FlatList
              data={listLiveBoardLastDay}
              renderItem={({item}) => (
                <ItemLastDay
                  TEN_NGAY={item.TEN_NGAY}
                  TIME_GREEN={convertTime(item.TIME_GREEN)}
                  uptime={item.uptime}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default LiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282f3ac7',
    elevation: 10,
  },
  body: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 30 / 2,
  },
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  dropdown: {
      borderBottomColor:'#cccccc59',
      borderBottomWidth:1,
      marginLeft:100,
      marginRight:100,
  }
});
