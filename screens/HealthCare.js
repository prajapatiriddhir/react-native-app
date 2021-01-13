import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';

const HealthCare = () => {
  return <Text style={styles.texStyle}>This is HealthCare</Text>;
};

const styles = StyleSheet.create({
  texStyle: {
    flex: 1,
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HealthCare;
