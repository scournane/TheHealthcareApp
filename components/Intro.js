import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

function Intro({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>QCare</Text>
        <Text style={styles.slogan}>Keeping healthcare a priority.</Text>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.bottom}>
         <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
        <Text style = {styles.loginText}>Have an account? Log in</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight:600,
  },
  slogan: {
    fontSize: 30,
    color: 'black',
    marginVertical: 10,
    fontWeight: 'bold',
    paddingBottom: 100,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: '#00AEEF',
    padding: 15, 
    alignItems: 'center',
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20, 
  },
  bottom:{
    alignItems: 'center',
  },
  loginText:{
    paddingTop: 20,
  }
});

export default Intro;