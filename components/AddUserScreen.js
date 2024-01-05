// AddUserScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const AddUserScreen = ({ route, navigation }) => {
  const { setUsers } = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userImage, setUserImage] = useState(null);

  const handleImagePick = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets) {
        setUserImage(response.assets[0].uri);
      }
    });
  };

  const handleSubmit = () => {
    if (firstName.trim() && lastName.trim()) {
      setUsers(prevUsers => [...prevUsers, { firstName, lastName, userImage }]);
      navigation.goBack();
    } else {
      // Handle empty input fields, maybe show an alert or a message
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an Image" onPress={handleImagePick} />
      {userImage && <Image source={{ uri: userImage }} style={styles.image} />}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <Button title="Add User" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  },
  // Add more styles if needed
});

export default AddUserScreen;