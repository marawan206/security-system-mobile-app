import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabOneScreen = () => {
  const [isCameraOn, setCameraOn] = useState(false);
  const [isLocalizationOn, setLocalizationOn] = useState(false);
  const [isTvOn, setTvOn] = useState(false);
  const [isFanOn, setFanOn] = useState(false);
  const [isLightOn, setLightOn] = useState(false);
  const [isThermostatOn, setThermostatOn] = useState(false);
  const [isPlugOn, setPlugOn] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true); // State for dark mode

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  // Styles based on the theme
  const containerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <ScrollView style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.ibb.co/7y3r2d0/Whats-App-Image-2024-10-17-at-13-32-39-345733bd.jpg' }}
        />
        <Text style={[textStyle, { fontWeight: 'bold' }]}>Hi, Bakr</Text> {/* Bold text */}
      </View>

      <View style={styles.tabBar}>
        <Text style={styles.activeTab}>Living Room</Text>
        <Text style={styles.inactiveTab}>Dining</Text>
        <Text style={styles.inactiveTab}>Kitchen</Text>
      </View>

      <View style={styles.deviceContainer}>
        {/* Camera Control */}
        <View style={styles.deviceCard}>
          <Icon name="camera" size={30} color={isCameraOn ? "#4CAF50" : "#fff"} />
          <Text style={styles.cardText}>Camera</Text>
          <Switch value={isCameraOn} onValueChange={setCameraOn} trackColor={{ false: "#767577", true: "#4CAF50" }} thumbColor={isCameraOn ? "#fff" : "#f4f3f4"} />
        </View>

        {/* Localization Control */}
        <View style={styles.deviceCard}>
          <Icon name="location" size={30} color={isLocalizationOn ? "#4CAF50" : "#fff"} />
          <Text style={styles.cardText}>Localization</Text>
          <Switch value={isLocalizationOn} onValueChange={setLocalizationOn} trackColor={{ false: "#767577", true: "#4CAF50" }} thumbColor={isLocalizationOn ? "#fff" : "#f4f3f4"} />
        </View>

        {/* Smart Light Control */}
        <View style={styles.deviceCard}>
          <Icon name="bulb" size={30} color={isLightOn ? "#4CAF50" : "#fff"} />
          <Text style={styles.cardText}>Smart Light</Text>
          <Switch value={isLightOn} onValueChange={setLightOn} trackColor={{ false: "#767577", true: "#4CAF50" }} thumbColor={isLightOn ? "#fff" : "#f4f3f4"} />
        </View>

        {/* Thermostat Control */}
        <View style={styles.deviceCard}>
          <Icon name="thermometer" size={30} color={isThermostatOn ? "#4CAF50" : "#fff"} />
          <Text style={styles.cardText}>Thermostat</Text>
          <Switch value={isThermostatOn} onValueChange={setThermostatOn} trackColor={{ false: "#767577", true: "#4CAF50" }} thumbColor={isThermostatOn ? "#fff" : "#f4f3f4"} />
        </View>

        {/* Smart TV Control */}
        <View style={styles.deviceCard}>
          <Icon name="tv" size={30} color={isTvOn ? "#4CAF50" : "#fff"} />
          <Text style={styles.cardText}>Smart TV</Text>
          <Switch value={isTvOn} onValueChange={setTvOn} trackColor={{ false: "#767577", true: "#4CAF50" }} thumbColor={isTvOn ? "#fff" : "#f4f3f4"} />
        </View>

        {/* Smart Fan Control */}
        <View style={styles.deviceCard}>
          <Icon name="airplane" size={30} color={isFanOn ? "#4CAF50" : "#fff"} />
          <Text style={styles.cardText}>Smart Fan</Text>
          <Switch value={isFanOn} onValueChange={setFanOn} trackColor={{ false: "#767577", true: "#4CAF50" }} thumbColor={isFanOn ? "#fff" : "#f4f3f4"} />
        </View>

        {/* Smart Plug Control */}
        <View style={styles.deviceCard}>
          <Icon name="power" size={30} color={isPlugOn ? "#4CAF50" : "#fff"} />
          <Text style={styles.cardText}>Smart Plug</Text>
          <Switch value={isPlugOn} onValueChange={setPlugOn} trackColor={{ false: "#767577", true: "#4CAF50" }} thumbColor={isPlugOn ? "#fff" : "#f4f3f4"} />
        </View>

        {/* Music Control */}
        <View style={styles.musicCard}>
          <Text style={styles.musicTitle}>Music</Text>
          <Text style={styles.musicSubtitle}>Give a Little Bit</Text>
          <View style={styles.musicControls}>
            <TouchableOpacity>
              <Icon name="play-back" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="play" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="play-forward" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addDevice}>
        <Text style={styles.addDeviceText}>+ Add New Device</Text>
      </TouchableOpacity>

      {/* Dark Mode Toggle Button */}
      <TouchableOpacity style={styles.toggleButton} onPress={toggleDarkMode}>
        <Text style={styles.toggleButtonText}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  darkContainer: {
    backgroundColor: '#1c1c1c', // Dark background
  },
  lightContainer: {
    backgroundColor: '#ffffff', // Light background
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  darkText: {
    color: '#ffffff', // White text for dark mode
  },
  lightText: {
    color: '#000000', // Black text for light mode
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  activeTab: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50', // Green active tab
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50', // Green underline
    paddingBottom: 5,
  },
  inactiveTab: {
    fontSize: 18,
    color: '#aaa', // Lighter color for inactive tabs
  },
  deviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  deviceCard: {
    width: '48%',
    padding: 20,
    backgroundColor: '#2c2c2c', // Darker card background
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: '#fff', // Ensure text remains white in both light and dark mode
    marginTop: 10,
  },
  musicCard: {
    width: '100%',
    padding: 20,
    backgroundColor: '#2c2c2c', // Darker music card background
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  musicTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  musicSubtitle: {
    fontSize: 16,
    color: '#aaa',
  },
  musicControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  addDevice: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addDeviceText: {
    color: '#fff',
    fontSize: 16,
  },
  // Updated toggleButton style to return to the top left corner
  toggleButton: {
    position: 'absolute',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    alignItems: 'center',
    top: 10, // Top padding to create space from the top edge
    left: 10, // Left padding to create space from the left edge
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});


export default TabOneScreen;
