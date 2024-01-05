import React from 'react'; // Import React
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const WelcomeTime = function() {
  var today = new Date();
  var curHr = today.getHours();

  if (curHr < 12) {
    return <Text style={styles.title}>Good Morning!</Text>;
  } else if (curHr < 18) {
    return <Text style={styles.title}>Good Afternoon!</Text>;
  } else {
    return <Text style={styles.title}>Good Evening!</Text>;
  }
};

const CurrentDate = function() {
  var today = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var dateString = today.toLocaleDateString('en-US', options);

  return <Text style={styles.dateStyle}>{dateString}</Text>;
};

export default function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <WelcomeTime />
        <CurrentDate /> 
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
  title:{
    fontWeight: 'bold',
    fontSize: 32,
  }
});
