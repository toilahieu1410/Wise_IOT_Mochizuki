import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getApiLayout} from '../../redux/layout/action';
import {View, Text, StyleSheet} from 'react-native'
import { Appbar, Button } from 'react-native-paper';

const LayoutScreen = () => {
    const dispatch = useDispatch();
    const listLayout = useSelector((store) => store.layout.listLayout);

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getApiLayout(page))
    }, [page])

    return (
        <View style={styles.container}>
           <Appbar.Header>
                <Appbar.Content title="Title"/>
                <Appbar.Action icon='dots-vertical' onPress={() => {}} />
            </Appbar.Header>
        </View>
    )
}

export default LayoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})