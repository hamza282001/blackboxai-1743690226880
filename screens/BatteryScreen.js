import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BatteryGauge from '../components/BatteryGauge';
import DataCard from '../components/DataCard';

const BatteryScreen = () => {
  // Mock battery data
  const batteryData = {
    voltage: 48.2,
    current: 12.5,
    soc: 75,
    temperature: 32,
    status: 'Charging',
    health: 'Good'
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Battery Overview</Text>
        <Text style={styles.status}>Status: {batteryData.status}</Text>
      </View>

      <BatteryGauge percentage={batteryData.soc} />

      <View style={styles.dataRow}>
        <DataCard title="Voltage" value={`${batteryData.voltage} V`} />
        <DataCard title="Current" value={`${batteryData.current} A`} />
      </View>

      <View style={styles.dataRow}>
        <DataCard title="Temperature" value={`${batteryData.temperature} °C`} />
        <DataCard title="Health" value={batteryData.health} />
      </View>

      <View style={styles.historySection}>
        <Text style={styles.sectionTitle}>History</Text>
        <View style={styles.historyChart}>
          {/* Placeholder for chart */}
          <Text style={styles.chartPlaceholder}>Battery Performance Chart</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 16,
    color: '#4a90e2',
    marginTop: 5,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  historySection: {
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  historyChart: {
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartPlaceholder: {
    color: '#666',
  },
});

export default BatteryScreen;