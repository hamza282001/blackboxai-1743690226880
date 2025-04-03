import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BatteryGauge = ({ percentage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gaugeContainer}>
        <View style={[styles.gaugeFill, { width: `${percentage}%` }]} />
        <View style={styles.gaugeCap} />
      </View>
      <Text style={styles.percentageText}>{percentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  gaugeContainer: {
    width: 200,
    height: 80,
    borderWidth: 3,
    borderColor: '#333',
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
  },
  gaugeFill: {
    height: '100%',
    backgroundColor: percentage => 
      percentage > 70 ? '#4CAF50' : 
      percentage > 30 ? '#FFC107' : '#F44336',
  },
  gaugeCap: {
    position: 'absolute',
    right: -10,
    top: 20,
    width: 10,
    height: 40,
    backgroundColor: '#333',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  percentageText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
});

export default BatteryGauge;