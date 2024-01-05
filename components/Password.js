import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import NavBar from './Navbar';

const ProfileComponent = () => {
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleChangePassword = () => {
    // Add your logic to change the password here
    setPasswordChanged(true);
  }

 if (passwordChanged) {
    return (
      <View style={styles.successMessageContainer}>
        <Text style={styles.successMessage}>Password Change Complete {'✅'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeButtonText}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Old Password</Text>
        <TextInput style={styles.input} placeholder="Enter first name" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>New Password</Text>
        <TextInput style={styles.input} placeholder="Enter last name" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Re-enter</Text>
        <TextInput style={styles.input} placeholder="Maine" />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText} >Let's get started!</Text>
      </TouchableOpacity>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#cccccc',
  },
  changeButton: {
    marginTop: 12,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  changeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  personalInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 16,
    color: '#333',
    width: '30%',
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    width: '65%',
  },
  button: {
    backgroundColor: '#00AEEF',
    padding: 15, 
    alignItems: 'center',
    borderRadius: 30,
    width: '60%',
    alignSelf: 'center',
    marginTop: 10,
  },
  successMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default ProfileComponent;