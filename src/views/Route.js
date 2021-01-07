import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// custom import
import vSplash from './Auth/vSplash';
import vLogin from './Auth/vLogin';
import vRegister from './Auth/vRegister';
import vDiscover from './Home/vDiscover';
import vSearch from './Home/vSearch';
import vDetail from './Home/vDetail';
import vTracking from './Home/vTracking';
import vProfile from './Home/vProfile';
import vLearn from './Home/vLearn';
import vMedDetail from './Home/vMedDetail';
import vAfterScanDetail from './Home/vAfterScanDetail';
import vScan1 from './Home/vScan1';
import vScan2 from './Home/vScan2';
import vScan3 from './Home/vScan3';

const Stack = createStackNavigator();
export default function Route () {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // this options hide all header
                screenOptions={{
                    headerShown: false
                }}   
                initialRouteName = "splash"
            >
                <Stack.Screen name = "splash" component = {vSplash} />
                <Stack.Screen name = "login" component = {vLogin} />
                <Stack.Screen name = "register" component = {vRegister} />
                <Stack.Screen name = "discover" component = {vDiscover} />
                <Stack.Screen name = "search" component = {vSearch} />
                <Stack.Screen name = "detail" component = {vDetail} />
                <Stack.Screen name = "tracking" component = {vTracking} />
                <Stack.Screen name = "profile" component = {vProfile} />
                <Stack.Screen name = "learn" component = {vLearn} />
                <Stack.Screen name = "meddetail" component = {vMedDetail} />
                <Stack.Screen name = "after_scan_detail" component = {vAfterScanDetail} />
                <Stack.Screen name = "scan1" component = {vScan1} />
                <Stack.Screen name = "scan2" component = {vScan2} />
                <Stack.Screen name = "scan3" component = {vScan3} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
