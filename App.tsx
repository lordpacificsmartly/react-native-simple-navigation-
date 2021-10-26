import React from 'react';
import { StyleSheet } from 'react-native';
import UserInputsScreen from './components/UserInputsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetailsScreen from './components/UserDetailsScreen';

const Stack = createNativeStackNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserInputsScreen" component={UserInputsScreen} />
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
  <AppNav />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
