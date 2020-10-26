import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import LayoutScreen from './screens/layout/index';
import TimelineScreen from './screens/timeline/index';
import LiveScreen from './screens/live/index';
import Report from './screens/report/index';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator
        initialRouteName='LayoutScreen'
        shifting={true}
        tabBarOptions={{activeTintColor: '#0b4645db', inactiveTintColor: 'gray', style: { backgroundColor: 'white'}}}
        >

            <Tab.Screen
            name="LayoutScreen"
            component={LayoutScreen}
            options={{tabBarLabel: 'Layout',
            tabBarIcon: ({color, size}) => (
                <Icon name='ios-albums-outline' size={size} color={color} />
            )}}/>

            <Tab.Screen
            name="TimelineScreen"
            component={TimelineScreen}
            options={{tabBarLabel: 'Timeline',
            tabBarIcon: ({color, size}) => (
                <Icon name='ios-timer-outline' size={size} color={color} />
            )}}/>

            <Tab.Screen
            name="LiveScreen"
            component={LiveScreen}
            options={{tabBarLabel: 'Live',
            tabBarIcon: ({color, size}) => (
                <Icon name='ios-play-forward-circle-outline' size={size} color={color} />
            )}}/>

            <Tab.Screen
            name="Report"
            component={Report}
            options={{tabBarLabel: 'Report',
            tabBarIcon: ({color, size}) => (
                <Icon name='ios-newspaper-outline' size={size} color={color} />
            )}}/>

        </Tab.Navigator>
    )
}

export default MainTab;