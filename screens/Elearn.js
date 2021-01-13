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
        <Text>{item.position}</Text>
      </View>
    </View>
  );
}

export default class Elearn extends React.Component {
  state = {
    data: [
      {
        name: '11th Physics',
        email: 'miyah.myles@gmail.com',
        position: 'Author Miyah',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: '8th History',
        email: 'june.cha@gmail.com',
        position: 'Auther June',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: '6th geography  ',
        email: 'iida.niskanen@gmail.com',
        position: 'Author iida',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: '9th Geometory',
        email: 'renee.sims@gmail.com',
        position: 'Author renee',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: '10th Alegbra',
        email: 'jonathan.nu\u00f1ez@gmail.com',
        position: 'Author Jonathan',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: '11th Human Body Anatomy',
        email: 'sasha.ho@gmail.com',
        position: 'Author Sasha',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: '8th Economic',
        email: 'abdullah.hadley@gmail.com',
        position: 'Author abdullah',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: '4th Science',
        email: 'thomas.stock@gmail.com',
        position: 'Author Thomas',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: '5th Maths',
        email: 'veeti.seppanen@gmail.com',
        position: 'Author Veeti',
        photo: 'https://picsum.photos/130/90',
      },
      {
        name: '11th Arts',
        email: 'bonnie.riley@gmail.com',
        position: 'Author bonnie',
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
