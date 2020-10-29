import React from 'react';
import { DatePicker } from 'native-base';
import moment from 'moment';

const today = new Date()
const date = moment(today).format('DD/MM/YYYY');
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
            placeHolderText={date}
            textStyle={{ color: "#fff", backgroundColor:'#0b46458f' }}
            placeHolderTextStyle={{ color: "#fff", backgroundColor:'#0f3c3e00' }}
            onDateChange={onPress}
            disabled={false}
            />

    )
}
export default datePicker;