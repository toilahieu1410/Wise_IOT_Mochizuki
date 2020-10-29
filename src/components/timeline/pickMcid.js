import React from 'react';
import {StyleSheet} from 'react-native';
import {Picker, Form, Icon} from 'native-base';

const PickDevices = ({devices, setDevices}) => {
    return (
        <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={styles.picker}
              selectedValue={devices}
              onValueChange={setDevices}
            >
              <Picker.Item label="PM07" value="1" />
              <Picker.Item label="PM09" value="2" />
              <Picker.Item label="PM01" value="3" />
            </Picker>
          </Form>
    )
};

export default PickDevices;
const styles = StyleSheet.create({
  picker: {
    color: '#ffffff',
  }
})