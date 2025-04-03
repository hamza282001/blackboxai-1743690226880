import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BatteryGauge from '../components/BatteryGauge';
import DataCard from '../components/DataCard';

const DashboardScreen = ({ navigation }) => {
  // Mock data
  const batteryData = {
    voltage: 48.2,
    current: 12.5,
    soc: 75,
    temperature: 32,
    cells: [3.2, 3.3, 3.1, 3.4, 3.2, 3.3, 3.4, 3.2, 3.3, 3.4, 3.2, 3.3],
    status: 'Charging'
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Battery Management System</Text>
        <Text style={styles.status}>Status: {batteryData.status}</Text>
      </View>

      <BatteryGauge percentage={batteryData.soc} />

      <View style={styles.dataRow}>
        <DataCard title="Voltage" value={`${batteryData.voltage} V`} />
        <DataCard title="Current" value={`${batteryData.current} A`} />
      </View>

      <View style={styles.dataRow}>
        <DataCard title="Temperature" value={`${batteryData.temperature} °C`} />
        <DataCard title="Cells" value={`${batteryData.cells.length}`} />
      </View>

      <View style={styles.cellContainer}>
        <Text style={styles.sectionTitle}>Cell Voltages</Text>
        <View style={styles.cellGrid}>
          {batteryData.cells.map((cell, index) => (
            <View key={index} style={styles.cellItem}>
              <Text style={styles.cellLabel}>Cell {index + 1}</Text>
              <Text style={styles.cellValue}>{cell} V</Text>
            </View>
          ))}
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
    fontSize: 22,
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
  cellContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  cellGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cellItem: {
    width: '30%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  cellLabel: {
    fontSize: 12,
    color: '#666',
  },
  cellValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DashboardScreen;