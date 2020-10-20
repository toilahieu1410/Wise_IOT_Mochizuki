import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getApiLayout} from '../../redux/layout/action';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { Appbar, Button } from 'react-native-paper';

import ItemLayout from '../../components/layout/item';

const LayoutScreen = () => {
    const dispatch = useDispatch();
    //get data
    const listLayout = useSelector((store) => store.layout.listLayout);

    const [page, setPage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getApiLayout(page))
        }, 1000);
        return () => clearInterval(interval);
    }, [page])

    function convertTime(time){
        return new Date(time * 1000).toISOString().substr(11, 8)
    }
    return (
        <View style={styles.container}>
           <Appbar.Header>
                <Appbar.Content title="Layout"/>
                <Appbar.Action icon='dots-vertical' onPress={() => {}} />
            </Appbar.Header>
            <FlatList
            data = {listLayout}
            renderItem={({item}) => <ItemLayout
            WDT_USERNAME={item.WDT_USERNAME}
            uptime={item.uptime}
            work_time={convertTime(item.work_time)}
            TIME_SHIFT_TOTAL={convertTime(item.TIME_SHIFT_TOTAL)}
            TIME_SHIFT_RUN={convertTime(item.TIME_SHIFT_RUN)}
            TIME_SHIFT_LOSS={convertTime(item.TIME_SHIFT_LOSS)}
            ACTUAL_SHIFT_QTY={item.ACTUAL_SHIFT_QTY}
            CURRENT_STATE={item.CURRENT_STATE}
            TIME_SHIFT_OFF={convertTime(item.TIME_SHIFT_OFF)}
            TIME_SHIFT_GREEN={convertTime(item.TIME_SHIFT_GREEN)}
            TIME_SHIFT_YELLOW={convertTime(item.TIME_SHIFT_YELLOW)}
            TIME_SHIFT_RED={convertTime(item.TIME_SHIFT_RED)}
            TIME_SHIFT_ERROR={convertTime(item.TIME_SHIFT_ERROR)}
            TIME_SHIFT_BREAK={convertTime(item.TIME_SHIFT_BREAK)}
            TIME_SHIFT_CHANGE_MOLD={convertTime(item.TIME_SHIFT_CHANGE_MOLD)}
            />}
            />
        </View>
    )
}

export default LayoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})