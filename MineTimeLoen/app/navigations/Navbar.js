import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Konto from './Konto.js';
import Overblik from './Overblik.js';

const Tab = createBottomTabNavigator();


export default function navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Hejsa' component={Konto}/>
        <Tab.Screen name='j' component={Overblik}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}