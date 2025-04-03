import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DevicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Devices</Text>
      
      <TouchableOpacity style={styles.deviceCard}>
        <Text style={styles.deviceName}>BMS-Device-01</Text>
        <Text style={styles.deviceType}>Bluetooth</Text>
        <Text style={styles.deviceStatus}>Not Connected</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deviceCard}>
        <Text style={styles.deviceName}>BMS-WiFi-01</Text>
        <Text style={styles.deviceType}>WiFi</Text>
        <Text style={styles.deviceStatus}>Not Connected</Text>
      </TouchableOpacity>

      <View style={styles.connectionButtons}>
        <TouchableOpacity style={styles.connectButton}>
          <Text style={styles.buttonText}>Scan for Devices</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  deviceCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  deviceType: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  deviceStatus: {
    fontSize: 14,
    color: '#e74c3c',
    marginTop: 5,
  },
  connectionButtons: {
    marginTop: 20,
  },
  connectButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DevicesScreen;