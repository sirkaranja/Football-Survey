import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/home.screens";
import SurveyScreen from "../screens/survey.screens";
import CompletedScreen from "../screens/complete.screens";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Survey" component={SurveyScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Completed" component={CompletedScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default MyStack
