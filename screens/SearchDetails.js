import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';

const SearchDetails = () => {
  return <Text style={styles.texStyle}>This is SearchDetails</Text>;
};

const styles = StyleSheet.create({
  texStyle: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchDetails;