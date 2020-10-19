import React from 'react';
import { Container, Content, DatePicker, Text } from 'native-base';

const datePicker = ({onPress}) => {

    return (
  
          <DatePicker
            defaultDate={new Date()}
            minimumDate={new Date(2019, 1, 1)}
            maximumDate={new Date(2030, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "0b4645db" }}
            placeHolderTextStyle={{ color: "#0b4645db" }}
            onDateChange={onPress}
            disabled={false}
            />

    )
}
export default datePicker;