import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import MainTab from './MainTab';
import Daily from './screens/chart/daily';
import Weekly from './screens/chart/weekly';
import Monthly from './screens/chart/monthly';
import Quantity from './screens/chart/quantity';

const Stack = createStackNavigator();
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0b4645db',
      accent: '#f1c40f',
    }
  };
const MainStack = () => {
    return (
        <PaperProvider theme={theme}>
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='MainTab' component={MainTab}/>
            <Stack.Screen name='Daily' component={Daily}/>
            <Stack.Screen name='Weekly' component={Weekly}/>
            <Stack.Screen name='Monthly' component={Monthly}/>
            <Stack.Screen name='Quantity' component={Quantity}/>
        </Stack.Navigator>
        </PaperProvider>
    )
}

export default MainStack;