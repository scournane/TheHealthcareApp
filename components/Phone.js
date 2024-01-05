import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function Homepage() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.descriptionText}>Secure account with phone number.</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
        />
        <Text style={styles.smsText}>You will receive an SMS verification that may apply message and data rates.</Text>
      </SafeAreaView>
      <SafeAreaView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's get started!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    paddingTop: 20,
  },
  descriptionText: {
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  input: {
    height: 50,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    marginBottom: 5,
  },
  smsText: {
    fontSize: 12,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00AEEF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center',
    bottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
