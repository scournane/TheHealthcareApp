import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserCard = ({ firstName, lastName }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{firstName} {lastName}</Text>
      {/* You can add more details or styles here as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // Adjust these styles to fit your design
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: 100,  // Making the card a square
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    // Style for the text
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default UserCard;
