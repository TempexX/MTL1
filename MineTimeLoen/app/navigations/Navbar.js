import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Konto from './Konto.js';
import Overblik from './Overblik.js';
import MineData from './MineData.js';
import Vagter from './Vagter.js';
import FontAwesome from '@expo/vector-icons/FontAwesome';



const Tab = createBottomTabNavigator();


export default function navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarIcon:({color,size})=>(
          <FontAwesome name="tachometer" size={24} color={color} />
        )

      }} >
        <Tab.Screen name='Overblik' component={Overblik}/>
        <Tab.Screen name='Vagter' component={Vagter}/>
        <Tab.Screen name='Mine Data' component={MineData}/>
        <Tab.Screen name='Konto' component={Konto}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}