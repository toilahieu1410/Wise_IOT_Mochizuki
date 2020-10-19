import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Appbar, Button } from 'react-native-paper';
import {getApiQuantityChart} from '../../redux/timeline_quantity/action';
import DatePicker from '../../components/timeline/datePicker';
import moment from 'moment';

const quantity = ({navigation}) => {
    const dispatch = useDispatch();
    const listTimelineQuantity = useSelector((store) => store.timeline_quantity.listTimelineQuantity);
    const [date, setDate] = useState(new Date());
    const [mcid, setMcid] = useState(1);
    const dateTime = moment(date).format('DD/MM/YYYY');
    useEffect(() => {
        dispatch(getApiQuantityChart(dateTime, mcid))
    }, [dateTime])

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Quantity"/>
            </Appbar.Header>
            <DatePicker onPress={(text) => setDate(text)}/>
        </View>
    )
}

export default quantity;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})