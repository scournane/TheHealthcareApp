import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './Navbar';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
/*
  return (
    <View>
      <Text>First Name: {firstName}</Text>
      <Text>Last Name: {lastName}</Text>
      {/* Add other profile information or components here */    
export default function Homepage({ navigation }) {
    const { isLoaded, user } = useUser();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
  
    useEffect(() => {
      if (isLoaded && user) {
        setFirstName(user.firstName || 'N/A');
        setLastName(user.lastName || 'N/A');
        setEmail(user.emailAddresses?.length > 0 ? user.emailAddresses[0].emailAddress : 'N/A');
      }
    }, [isLoaded, user]);
  
    if (!isLoaded) {
      return <Text>Loading...</Text>;
    }
  
  return (
    <SafeAreaView style = {styles.container}>
    <View style={styles.push}/>
    <View style={styles.content}>
        <View style={styles.topView}>
          <Image source={require('../assets/Person.png')} style={styles.logo} resizeMode="contain" />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{firstName} {lastName}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.topButton}  onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.appleButton}>
          <Image source={require('../assets/Help.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.buttonText}>Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleButton}>
          <Image source={require('../assets/Help.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.buttonText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleButton} onPress={() => navigation.navigate('SettingsFull')}>
          <Image source={require('../assets/settings.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
      <View style = {styles.content}>
        <TouchableOpacity style={styles.appleButton}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  content:{
    marginHorizontal:40,
  },
   appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    paddingTop: 30,
  },
  buttonText:{
    fontSize: 18,
    paddingLeft: 12,
  },
  line: {
    marginTop:20,
    height: 1,
    backgroundColor: '#F2F4F5', 
  },
  topButton: {
    backgroundColor: '#00AEEF',
    paddingVertical: 15, 
    alignItems: 'center',
    borderRadius: 30,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 5,
  },
  name:{
    fontWeight: 'bold',
    fontSize: 27,
  },
  email:{
    fontSize: 18,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 18,
  },
  textContainer: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
