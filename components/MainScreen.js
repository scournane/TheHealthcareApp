// MainScreen.js
import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet, SafeAreaView } from 'react-native';
import UserCard from './UserCard'; // Import the UserCard component
import NavBar from './Navbar';

const MainScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]); // Initialize user list as an empty array

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Add User"
          onPress={() => navigation.navigate('AddUserScreen', { setUsers })}
        />
      </View>
      <FlatList
        data={users}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item }) => (
          <UserCard firstName={item.firstName} lastName={item.lastName} />
        )}
        style={styles.list} // Apply additional styles to FlatList
        // Define other FlatList properties as needed
      />
      <NavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes the full height of the screen
    backgroundColor: '#f5f5f5', // You can adjust the background color
  },
  list: {
    flex: 1, // Allows the list to take up available space
    marginBottom: 60, // Adds space at the bottom of the list
  },
  buttonContainer: {
    padding: 10, // Adds padding around the button
    // You can add more styling for the button container if needed
  },
  // Add more styles if needed
});

export default MainScreen;
