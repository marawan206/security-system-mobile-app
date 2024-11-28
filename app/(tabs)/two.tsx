import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const TabTwo = () => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8765'); // Adjust the WebSocket URL if necessary

    ws.onmessage = (event) => {
      setImage(event.data); // Set the received image data
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.frameContainer}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image
              source={{ uri: `data:image/jpeg;base64,${image}` }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.placeholderText}>Unauthorized person's picture will be displayed here</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  frameContainer: {
    width: 300,
    height: 300,
    borderRadius: 20,
    padding: 10,
    borderWidth: 3,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});

export default TabTwo;
