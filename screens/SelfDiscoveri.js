import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

function Item({item}) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{uri: item.photo}}
        style={{width: 130, height: 90, borderRadius: 3}}
      />
      <View style={{alignItems: 'center', flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
      </View>
    </View>
  );
}

export default class SelfDiscoveri extends React.Component {
  state = {
    data: [
      {
        name: 'Mutiple Intelligence',
        email: 'miyah.myles@gmail.com',
        position: 'Author Miyah',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: 'Career',
        email: 'june.cha@gmail.com',
        position: 'Auther June',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: 'SWOT',
        email: 'iida.niskanen@gmail.com',
        position: 'SWOT',
        photo: 'https://picsum.photos/130/90',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={this.state.data}
          renderItem={({item}) => <Item item={item} />}
          numColumns={2}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 10,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 5,
  },
});
