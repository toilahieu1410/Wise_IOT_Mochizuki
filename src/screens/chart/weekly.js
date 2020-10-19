import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getApiWeeklyChart} from '../../redux/timeline_weekly/action';
import { Appbar, Button } from 'react-native-paper';
import { Icon, Picker, Form } from "native-base";


const weekly = () => {
const dispatch = useDispatch();
const [year, setYear] = useState(2020);
const [mcid, setMcid] = useState(1)
const listTimelineWeekly = useSelector((store) => store);

useEffect(() => {
    dispatch(getApiWeeklyChart(year, mcid));
}, [year])

    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Weekly"/>
            </Appbar.Header>
            <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={year}
              onValueChange={(itemValue) => setYear(itemValue)}
            >
              <Picker.Item label="2020" value='2020' />
              <Picker.Item label="2019" value="2019" />
              <Picker.Item label="2018" value="2018" />
              <Picker.Item label="2017" value="2017" />
              <Picker.Item label="2016" value="2016" />
            </Picker>
          </Form>
        </View>
    )
}

export default weekly;
const styles = StyleSheet.create({
    
})