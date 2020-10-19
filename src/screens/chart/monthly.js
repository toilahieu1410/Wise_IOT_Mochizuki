import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getApiMonthlyChart} from '../../redux/timeline_monthly/action';
import { Icon, Picker, Form } from "native-base";

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

            <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={year}
              onValueChange={(itemValue) => setYear(itemValue)}
            >
              <Picker.Item label="Thang 12" value='12' />
              <Picker.Item label="Thang 11" value="11" />
              <Picker.Item label="Thang 10" value="10" />
              <Picker.Item label="Thang 09" value="09" />
              <Picker.Item label="Thang 08" value="08" />
            </Picker>
          </Form>

          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={year}
              onValueChange={(itemValue) => setMonth(itemValue)}
            >
              <Picker.Item label="2020" value='2020' />
              <Picker.Item label="2019" value="2019" />
            </Picker>
          </Form>
        </View>
    )
}

export default monthly;
const styles = StyleSheet.create({
    
})