import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from './context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  // Predefined credentials
  const predefinedUsername = 'admin';
  const predefinedPassword = 'password123';

  const showPopup = (message) => {
    setPopupMessage(message);
    setIsPopupVisible(true);
  };

  const handleLogin = () => {
    if (username === '' || password === '') {
      showPopup('Please fill in both fields');
    } else if (username === predefinedUsername && password === predefinedPassword) {
      login({ username }); // Pass user data to login
      router.replace('/(tabs)/one'); // Navigate to the tabs page
    } else {
      showPopup('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Popup Modal */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isPopupVisible}
        onRequestClose={() => setIsPopupVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.popup}>
            <Text style={styles.popupText}>{popupMessage}</Text>
            <TouchableOpacity
              style={styles.popupButton}
              onPress={() => setIsPopupVisible(false)}
            >
              <Text style={styles.popupButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Export config to hide header for this page
export const config = {
  screen: {
    headerShown: false, // Hide the header for this screen
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  popupButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  popupButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginPage;
  