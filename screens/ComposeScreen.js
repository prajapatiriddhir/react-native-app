import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const ComposeScreen = (navigation) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Compose page!</Text>
      {/* <Button
        onPress={() => navigation.navigate('SearchDetails')}
        title="Go to Search Details"
      /> */}
    </View>
  );
};

export default ComposeScreen;
