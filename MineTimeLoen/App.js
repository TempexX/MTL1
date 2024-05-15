import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './app/Screen/LoginScreen.js';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Navbar from './app/navigations/Navbar.js';




export default function App() {

  return (
    <ClerkProvider publishableKey="pk_test_cmVsYXRpdmUtY2hpcG11bmstNjMuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <View style={styles.container}>
        <SignedIn>
          <Navbar/>
        </SignedIn>
        <SignedOut>
         <LoginScreen/>
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

const typography = StyleSheet.create({
  header: {
    fontFamily: 'Main',
    color: '#000',
    fontSize: 90,
    marginBottom: 36,
    textTransform: 'uppercase',
  },
});
