import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Image } from 'react-native';
import React from 'react';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { images } from './../../assets/img/images'

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View>
      <View style={styles.container}>
      <Image source={images.wave} style={styles.backgroundImage}></Image>
        <Image source={images.splashart} style={styles.loginArt}></Image>
        <Text style={styles.text}>Min Timeløn</Text>

        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Beregn nu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const iosFontFamily = Platform.OS === 'ios' ? 'System' : null;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 120,
    margin: 0, // Tilføj denne linje for at nulstille margenen
    left: -100, // Juster positionen til venstre
  },
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 50, // Juster polstringen
    padding: 0,
    margin: 0, // Tilføj denne linje for at nulstille margenen
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    marginBottom: 100,
    fontWeight: '300',
    fontFamily: 'system',
    textTransform: "uppercase",
    color: '#333',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 8,
    borderColor: "#d9d9de",
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    transition: 'transform 200ms, background 200ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginArt: {
    width: 200,
    height: 200,
  },
});