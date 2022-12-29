import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import MovieDetail from '../components/movie-detail';
import Movies from '../components/movies';

const Stack = createNativeStackNavigator ();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Movies'>
          <Stack.Screen name='Movies' component={Movies} options={{ headerShown: false }} />
          <Stack.Screen name='MovieDetail' component={MovieDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}