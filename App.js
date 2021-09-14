import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login,LabCart } from './src/component';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();


const commonBackGround = {
  headerStyle: {
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
  }
}

const LoginScreenOptions = {
  title: '',
  userName:''
}
const LabCartScreenOptions = {
  title: ''
}

export default function App() {
  return (
    <NavigationContainer >
      <Navigator initialRouteName="Login" screenOptions={commonBackGround}>
        <Screen name="Login" component={Login} options={LoginScreenOptions}>
        </Screen>
        <Screen name="LabCart" component={LabCart} options={LabCartScreenOptions}>
        </Screen>
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
