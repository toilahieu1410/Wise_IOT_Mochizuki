import React from 'react';
import {Picker, Form} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DropdownYear = () => {
    return (
        <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
            //   style={{ width: undefined }}
            //   selectedValue={this.state.selected}
            //   onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="2020" value="key0" />
              <Picker.Item label="2019" value="key1" />
              <Picker.Item label="2018" value="key2" />
              <Picker.Item label="2017" value="key3" />
              <Picker.Item label="2016" value="key4" />
            </Picker>
          </Form>
    )
}
export default DropdownYear;