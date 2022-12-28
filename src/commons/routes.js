import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import movies from '../components/movies';

const Stack = createNativeStackNavigator ();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Movies'>
          <Stack.Screen name='Movies' component={movies} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}