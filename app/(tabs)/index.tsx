import React from 'react';
import { StyleSheet, Text, View, Image, Switch, ScrollView, TouchableOpacity } from 'react-native';

const TabOneScreen = () => {
  const [isCameraOn, setCameraOn] = React.useState(false);
  const [isLocalizationOn, setLocalizationOn] = React.useState(false);
  const [isTvOn, setTvOn] = React.useState(false);
  const [isFanOn, setFanOn] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Bakr</Text>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://example.com/your-avatar-url.png' }} // Replace with actual image URL
        />
      </View>

      <View style={styles.tabBar}>
        <Text style={styles.activeTab}>Living Room</Text>
        <Text style={styles.inactiveTab}>Dining</Text>
        <Text style={styles.inactiveTab}>Kitchen</Text>
      </View>

      <View style={styles.deviceContainer}>
        <View style={styles.deviceCard}>
          <Text style={styles.deviceText}>Turn Camera</Text>
          <Switch value={isCameraOn} onValueChange={setCameraOn} />
        </View>

        <View style={styles.deviceCard}>
          <Text style={styles.deviceText}>Localization</Text>
          <Switch value={isLocalizationOn} onValueChange={setLocalizationOn} />
        </View>

        <View style={styles.musicCard}>
          <Text style={styles.musicTitle}>Music</Text>
          <Text style={styles.musicSubtitle}>Give a Little Bit</Text>
          <View style={styles.musicControls}>
            <Text>{'<<'}</Text>
            <Text>{'>'}</Text>
            <Text>{'>>'}</Text>
          </View>
        </View>

        <View style={styles.deviceCard}>
          <Text style={styles.deviceText}>Smart TV</Text>
          <Switch value={isTvOn} onValueChange={setTvOn} />
        </View>

        <View style={styles.deviceCard}>
          <Text style={styles.deviceText}>Smart Fan</Text>
          <Switch value={isFanOn} onValueChange={setFanOn} />
        </View>
      </View>

      <TouchableOpacity style={styles.addDevice}>
        <Text style={styles.addDeviceText}>+ Add New Device</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  activeTab: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
  inactiveTab: {
    fontSize: 18,
    color: '#999',
  },
  deviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  deviceCard: {
    width: '48%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  deviceText: {
    fontSize: 16,
    marginBottom: 10,
  },
  musicCard: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  musicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  musicSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  musicControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addDevice: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addDeviceText: {
    fontSize: 16,
    color: '#999',
  },
});

export default TabOneScreen;
