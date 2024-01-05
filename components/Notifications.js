import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import NavBar from './Navbar';

const Notifications = () => {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isSoundEnabled, setSoundEnabled] = useState(false);
  const [isPreviewEnabled, setPreviewEnabled] = useState(false);

  const toggleSwitch = (setting) => {
    if (setting === 'notifications') {
      setNotificationsEnabled(previousState => !previousState);
    } else if (setting === 'sound') {
      setSoundEnabled(previousState => !previousState);
    } else if (setting === 'preview') {
      setPreviewEnabled(previousState => !previousState);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingRow}>
        <Text>Show Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#00AEEF" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch('notifications')}
          value={isNotificationsEnabled}
        />
      </View>
      <View style={styles.settingRow}>
        <Text>Sound</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#00AEEF" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch('sound')}
          value={isSoundEnabled}
        />
      </View>
      <View style={styles.settingRow}>
        <Text>Show Preview</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#00AEEF" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch('preview')}
          value={isPreviewEnabled}
        />
      </View>
      {/* Add your button here */}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  // Add styles for your button here
});

export default Notifications;
