import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import MainTab from './MainTab';

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
        </Stack.Navigator>
        </PaperProvider>
    )
}

export default MainStack;