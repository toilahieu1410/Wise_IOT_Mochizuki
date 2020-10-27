import React from 'react';
import { DatePicker } from 'native-base';

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
            textStyle={{ color: "#fff", backgroundColor:'#0b46458f' }}
            placeHolderTextStyle={{ color: "#fff", backgroundColor:'#0b46458f' }}
            onDateChange={onPress}
            disabled={false}
            />

    )
}
export default datePicker;