import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './Navbar';

export default function Homepage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.appleButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/Profile.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.buttonText}>Profile</Text>
          <Image source={require('../assets/arrow.png')} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleButton} onPress={() => navigation.navigate('Password')}>
          <Image source={require('../assets/Password.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.buttonText}>Password</Text>
          <Image source={require('../assets/arrow.png')} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleButton} onPress={() => navigation.navigate('Notifications')}>
          <Image source={require('../assets/Not.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.buttonText}>Notifications</Text>
          <Image source={require('../assets/arrow.png')} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleButton}>
          <Image source={require('../assets/settings.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.buttonText}>Languages</Text>
          <Image source={require('../assets/arrow.png')} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
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
