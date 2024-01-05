import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navContainer}>
      <Button
        title="Main Screen"
        onPress={() => navigation.navigate('MainScreen')}
      />
      <Button
        title= "HOME"
        onPress={() => navigation.navigate('QR')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white', // Optional for better visibility
        paddingVertical: 15, // Optional for better visibility
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        // Add padding at the bottom to avoid overlapping content
        paddingBottom: 0, // Adjust this value as needed
    },
});

export default NavBar;
