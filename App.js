import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import MyStack from "./navigation";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
