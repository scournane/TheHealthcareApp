/*import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/WarmUpBrowser";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
 
WebBrowser.maybeCompleteAuthSession();
 
const SignInWithOAuth = ({navigation}) => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        fontWeight: 700,
        <Image source={require('../assets/logo.png')} resizeMode="contain" />
      </View>
      <TouchableOpacity style={styles.googleButton} onPress={onPress} >
        <Text style={styles.buttonText}>Continue with Google</Text>
        <Image source={require('../assets/Google.png')} style={styles.logo} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton}>
        <Text style={styles.buttonText}>Continue with Apple</Text>
        <Image source={require('../assets/Apple.png')} style={styles.logo} resizeMode="contain" />
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <View style={styles.textView}>
          <Text style={styles.text}>Or</Text>
        </View>
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QR')}>
        <Text style={styles.buttonText} >Let's get started!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex: 2,
    paddingTop: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontWeight:700,
    alignSelf: 'center',
    paddingBottom: 90,
  },
  button: {
    backgroundColor: '#00AEEF',
    padding: 15, 
    alignItems: 'center',
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#0072C6',
    padding: 15, 
    alignItems: 'center',
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  appleButton: {
    flexDirection: 'row',
    backgroundColor: '#979C9E',
    padding: 15, 
    alignItems: 'center',
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18, 
  },
  logo:{
    marginLeft: 15,
  },
   dividerContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#C0C0C0', 
    marginHorizontal: 10,
  },
  textView: {
  },
  text: {
    fontSize: 18, 
    color: '#C0C0C0', 
  },
});
export default SignInWithOAuth;*/