import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const BatteryCellScreen = () => {
  const [config, setConfig] = useState({ rows: 3, cols: 4 }); // Default 3x4 configuration
  const [cells, setCells] = useState([]);

  // Generate cells based on current configuration
  useEffect(() => {
    const totalCells = config.rows * config.cols;
    const newCells = Array.from({length: totalCells}, (_, i) => ({
      id: i+1,
      voltage: (3.2 + Math.random() * 0.3).toFixed(2),
      status: ['Normal', 'Warning', 'Critical'][Math.floor(Math.random() * 3)]
    }));
    setCells(newCells);
  }, [config]);

  // Calculate cell width based on screen width and columns
  const screenWidth = Dimensions.get('window').width;
  const cellWidth = (screenWidth - 40) / config.cols - 10; // 40 = padding, 10 = margin

  const changeConfig = (rows, cols) => {
    setConfig({ rows, cols });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cell Voltages</Text>
      
      <View style={styles.configSelector}>
        <Text style={styles.configLabel}>Configuration:</Text>
        <TouchableOpacity 
          style={[styles.configButton, config.rows === 3 && config.cols === 4 && styles.activeConfig]}
          onPress={() => changeConfig(3, 4)}
        >
          <Text>3x4</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.configButton, config.rows === 4 && config.cols === 4 && styles.activeConfig]}
          onPress={() => changeConfig(4, 4)}
        >
          <Text>4x4</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.configButton, config.rows === 8 && config.cols === 4 && styles.activeConfig]}
          onPress={() => changeConfig(8, 4)}
        >
          <Text>8x4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryCard}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Configuration</Text>
          <Text style={styles.summaryValue}>{config.rows}x{config.cols}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total Cells</Text>
          <Text style={styles.summaryValue}>{cells.length}</Text>
        </View>
      </View>

      <View style={[styles.cellGrid, { flexDirection: 'column' }]}>
        {Array.from({length: config.rows}).map((_, rowIndex) => (
          <View key={rowIndex} style={styles.cellRow}>
            {cells
              .slice(rowIndex * config.cols, (rowIndex + 1) * config.cols)
              .map(cell => (
                <View 
                  key={cell.id} 
                  style={[
                    styles.cellCard, 
                    { width: cellWidth },
                    cell.status === 'Warning' && styles.warningCell,
                    cell.status === 'Critical' && styles.criticalCell
                  ]}
                >
                  <Text style={styles.cellNumber}>C{cell.id}</Text>
                  <Text style={styles.cellVoltage}>{cell.voltage} V</Text>
                  <Text style={styles.cellStatus}>{cell.status}</Text>
                </View>
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
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
  configSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  configLabel: {
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  configButton: {
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  activeConfig: {
    backgroundColor: '#4a90e2',
  },
  summaryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cellGrid: {
    marginBottom: 20,
  },
  cellRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  cellCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  warningCell: {
    borderLeftWidth: 5,
    borderLeftColor: '#FFC107',
  },
  criticalCell: {
    borderLeftWidth: 5,
    borderLeftColor: '#F44336',
  },
  cellNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  cellVoltage: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 3,
    color: '#4a90e2',
  },
  cellStatus: {
    fontSize: 12,
    color: '#666',
  },
});

export default BatteryCellScreen;