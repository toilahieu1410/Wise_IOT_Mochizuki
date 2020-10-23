import React from 'react';
import {StyleSheet} from 'react-native';
import {Picker, Form, Icon} from 'native-base';

const PickYear = ({year, setYear}) => {

    const today = new Date();
    const years = today.getFullYear();
    const listYear = [
        {value: String(years), label: String(years)},
        {value: String(years - 1), label: String(years - 1)},
        {value: String(years - 2), label: String(years - 2)},
        {value: String(years - 3), label: String(years - 3)},
    ]
    return (
        <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select Year"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={year}
              onValueChange={setYear}
            >
              {listYear.map((item, index) => {
                  return (
                      <Picker.Item label={item.label} value={item.value} key={index}/>
                  )
              })}
            </Picker>
        </Form>
    )
}
export default PickYear;