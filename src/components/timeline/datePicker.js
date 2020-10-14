import React, {useState} from 'react';
import { Container, Content, DatePicker, Text } from 'native-base';

const datePicker = ({onPress}) => {
    // const [date, setDate] = useState('14/10/2020');
    // const dateTime = moment(date).format('DD/MM/YYYY');
    // console.log(dateTime);
    return (
        <Container>
        <Content>
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
            <Text>
            </Text>
        </Content>
      </Container>
    )
}
export default datePicker;