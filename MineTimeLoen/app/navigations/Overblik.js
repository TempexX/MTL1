import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header.js'

export default function Overblik() {
  return (
    <View style={{
       flex: 1, 
       alignItems: 'center', 
       backgroundColor: 'rgba(29,29,31,1)'
       }}>
        <Header/>
    </View>
  )
} 

const typography = StyleSheet.create({
  header: {
    fontFamily: 'Main',
    color: '#fff',
    fontSize: 50,
    marginBottom: 36,
    textTransform: 'uppercase',
  },
});