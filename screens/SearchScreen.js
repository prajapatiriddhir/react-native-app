import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import SearchDetails from './SearchDetails';

const SearchScreen = (navigation) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Search page!</Text>
      {/* <Button
        onPress={() => navigation.navigate('SearchDetails')}
        title="Go to Search Details"
      /> */}
    </View>
  );
};

export default SearchScreen;
