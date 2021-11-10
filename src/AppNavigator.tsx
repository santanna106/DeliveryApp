import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Login} from './screens/Login';
import {Home} from './screens/Home';
import {Register} from './screens/Register';
import {Delivery} from './screens/Delivery';
import {Deliveries} from './screens/Deliveries';
import { AddAddres } from './screens/AddAddress';

const {Navigator,Screen} = createStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                <Screen name="Login" component={Login}></Screen>
                <Screen name="Home" component={Home}></Screen>
                <Screen name="Register" component={Register}></Screen>
                <Screen name="Delivery" component={Delivery}></Screen>
                <Screen name="Deliveries" component={Deliveries}></Screen>
                <Screen name="Details" component={AddAddres}></Screen>
            </Navigator>
        </NavigationContainer>

    );
}