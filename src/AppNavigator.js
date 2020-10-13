import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useDispatch,useSelector} from 'react-redux';
import {checkLogin} from './redux/auth/action';

import SignInScreen from './screens/signIn/index';
import LoadingScreen from './screens/loading/index';
import MainStack from './MainStack';

const Stack = createStackNavigator();
const tokenKey = 'tokenKey';

const MyStack = () => {
    const dispatch = useDispatch();
    const {restoring, isLoggedIn} = useSelector((store) => ({
        restoring: store.auth.restoring,
        isLoggedIn: store.auth.isLoggedIn
    }));

    useEffect(() => {
        dispatch(checkLogin())
    }, [dispatch])

    return (
        <NavigationContainer>
            {restoring ? <LoadingScreen/> : ! isLoggedIn ? (
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name='SignInScreen' component={SignInScreen}/>
                </Stack.Navigator>
            ) : (
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name='MainStack' component={MainStack}/>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    )
}

export default MyStack;