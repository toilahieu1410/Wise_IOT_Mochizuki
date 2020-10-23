import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getApiMonthlyChart} from '../../redux/timeline_monthly/action';
import PickYear from '../../components/timeline/pickYear';
import PickMonth from '../../components/timeline/pickMonth';
import PickDevices from '../../components/timeline/pickMcid';

const monthly = ({navigation}) => {
    const dispatch = useDispatch();
    const [year, setYear] = useState(2020);
    const [month, setMonth] = useState(10);
    const [mcid, setMcid] = useState(1);
    const listTimelineMonthly = useSelector((store) => store.timeline_monthly.listTimelineMonthly);

    useEffect(() => {
        dispatch(getApiMonthlyChart(year, month, mcid));
    }, [month])
    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Monthly"/>
            </Appbar.Header>

            <View style={styles.header}>
              <PickYear
              year={year}
              setYear={setYear}/>
              <PickMonth
              month={month}
              setMonth={setMonth}/>
              <PickDevices
              devices={mcid}
              setDevices={setMcid}/>
            </View>
        </View>
    )
}

export default monthly;
const styles = StyleSheet.create({
    
})