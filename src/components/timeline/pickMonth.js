import React from 'react';
import {StyleSheet,Text} from 'react-native';
import {Picker, Form, Icon} from 'native-base';

const PickMonth = ({month, setMonth}) => {
    const today = new Date();
    const months = today.getMonth();
    const listMonth = [
        {value: String(months + 1), label: String(months + 1)},
        {value: '1', label: '1'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
        {value: '4', label: '4'},
        {value: '5', label: '5'},
        {value: '6', label: '6'},
        {value: '7', label: '7'},
        {value: '8', label: '8'},
        {value: '9', label: '9'},
        {value: '10', label: '10'},
        {value: '11', label: '11'},
        {value: '12', label: '12'},
    ]
    return (
        <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select Year"
              iosIcon={<Icon name="arrow-down" />}
              style={styles.picker}
              selectedValue={month}
              onValueChange={setMonth}
            >
              {listMonth.map((item, index) => {
                  return (
                      <Picker.Item label={item.label} value={item.value} key={index}/>
                  )
              })}
            </Picker>
        </Form>
    )
}
export default PickMonth;
const styles = StyleSheet.create({
    picker: {
      color: '#ffffff',
    }
  })