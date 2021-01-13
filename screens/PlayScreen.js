import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const PlayScreen = (navigation) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Play page</Text>
      {/* <Button
        onPress={() => navigation.navigate('SearchDetails')}
        title="Go to Search Details"
      /> */}
    </View>
  );
};

export default PlayScreen;
