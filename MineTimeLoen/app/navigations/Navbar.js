import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Konto from './Konto.js';
import Overblik from './Overblik.js';
import MineData from './MineData.js';
import Vagter from './Vagter.js';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();


export default function navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingHorizontal: 5,
          paddingTop: 10,
          backgroundColor: 'rgba(35,35,38,1)',
          position: 'absolute',
          borderTopWidth: 1,
          borderTopColor: 'rgba(35,35,38,1)'
          
      },
        headerShown:false,
        tabBarActiveTintColor: '#db1a5a',
        

      }} >
        <Tab.Screen name='Overblik' component={Overblik} 
        options={{
          tabBarIcon:({color,size})=>(
            <FontAwesome name="tachometer" size={size} color={color} />
          )
        }}/>
        
        <Tab.Screen name='Vagter' component={Vagter} 
        options={{
          tabBarIcon:({color,size})=>(
          <FontAwesome name="list-ol" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name='Mine Data' component={MineData} 
        options={{
          tabBarIcon:({color,size})=>(
          <FontAwesome name="archive" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name='Konto' component={Konto} 
        options={{
          tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name="account" size={size} color={color} />
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}