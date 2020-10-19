import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Appbar, Button } from 'react-native-paper';
import {getApiLiveBoardTime ,getApiLast5Day} from '../../redux/liveBoard/action';

const LiveScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const listLiveBoardTime = useSelector((store) => store.liveBoard.listLiveBoardTime);
    const listLiveBoardLastDay = useSelector((store) => store.liveBoard.listLiveBoardLastDay);

    const [mcid, setMcid] = useState(1);
    useEffect(() => {
        dispatch(getApiLiveBoardTime(mcid));
        dispatch(getApiLast5Day(mcid));
    }, [])
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Live Board"/>
            </Appbar.Header>
        </View>
    )
}

export default LiveScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})