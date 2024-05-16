import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function Header() {
    const {isLoaded,isSignedIn,user}=useUser();
  return isLoaded&& (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {user?.image ? (
        <Image source={{ uri: user.image }} style={{ width: 50, height: 50 }} />
    ) : (
        <Text>No image available</Text>
    )}
</View>
  )
}