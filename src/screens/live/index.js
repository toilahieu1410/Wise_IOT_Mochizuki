import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Appbar } from 'react-native-paper';
import {getApiLiveBoardTime ,getApiLast5Day} from '../../redux/liveBoard/action';
import Live from '../../components/liveBoard/live';
import ItemLastDay from '../../components/liveBoard/lastDay';
import { Toolbar } from 'react-native-material-ui';

const LiveScreen = () => {
    const dispatch = useDispatch();
    const listLiveBoardTime = useSelector((store) => store.liveBoard.listLiveBoardTime);
    const listLiveBoardLastDay = useSelector((store) => store.liveBoard.listLiveBoardLastDay);

    const [mcid, setMcid] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getApiLiveBoardTime(mcid));
            dispatch(getApiLast5Day(mcid));
        }, 1000);
        return () => clearInterval(interval);
    }, [mcid])

    function convertTime(time){
        return new Date(time * 1000).toISOString().substr(11, 8)
    }

    return (
        <View style={styles.container}>
            <Toolbar
            centerElement = 'Live Board'
            backgroundColor = 'red'
            rightElement={{
                menu: {
                    icon: "more-vert",
                    labels: ["PM07", "PM09", "PM01"]
                }
            }}
            onRightElementPress={ (label) => {
            if(label.index === 0) {
                setMcid(1)
            }
            if(label.index === 1){
                setMcid(2)
            }
            if(label.index === 2){
                setMcid(3)
            }
            }}
            />

        <View style={styles.body}>
        <FlatList
        data={listLiveBoardTime}
        renderItem={({item}) => <Live
        WDT_USERNAME={item.WDT_USERNAME}
        RUNNING_TIME={convertTime(item.RUNNING_TIME)}
        CURRENT_STATE={item.CURRENT_STATE}
        uptime={item.uptime}
        PERCENT_TARGET={item.PERCENT_TARGET}
        TIME_GREEN={convertTime(item.TIME_GREEN)}
        TIME_LOSS={convertTime(item.TIME_LOSS)}
        />}
        />

        <FlatList
        data={listLiveBoardLastDay}
        renderItem={({item}) => <ItemLastDay
        TEN_NGAY={item.TEN_NGAY}
        TIME_GREEN={item.TIME_GREEN}
        uptime={item.uptime}
        />}
        />
        </View>
        </View>
    )
}

export default LiveScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent:'space-evenly',
        alignItems: 'center',
        backgroundColor: '#736a6a82',
        
    },
    
})