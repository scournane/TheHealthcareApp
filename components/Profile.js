import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './Navbar';

const ProfileComponent = () => {
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
      <Text style={styles.personalInfoTitle}>PERSONAL INFORMATION</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>First name</Text>
        <TextInput style={styles.input} placeholder="Enter first name" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Last name</Text>
        <TextInput style={styles.input} placeholder="Enter last name" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Location</Text>
        <TextInput style={styles.input} placeholder="Maine" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="Enter phone number" />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Email</Text>
        <TextInput style={styles.input} placeholder="samson.cournane@maine.edu" />
      </View>
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
    width: '30%', // adjust the width as needed
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    width: '65%',
  },
});

export default ProfileComponent;
