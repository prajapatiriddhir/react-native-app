import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import {Card} from 'react-native-paper';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class SelectRoleScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoIcon}
          resizeMode="contain"
          source={require('../assets/logo.png')}
        />

        <Text style={styles.accountText}> Choose your acount type</Text>

        <Card
          style={styles.cardStyle}
          onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.cardContainer}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/teacher.png')}
                style={styles.imageStyle}
              />
              <Text style={styles.roleTextStyle}>Teacher</Text>
            </View>
          </View>
        </Card>

        <Card
          style={styles.cardStyle}
          onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.cardContainer}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/learner.png')}
                style={styles.imageStyle}
              />
              <Text style={styles.roleTextStyle}>Learner</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  accountText: {
    marginTop: 20,
    marginLeft: 30,
    width: width,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardStyle: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    padding: 10,
    elevation: 2,
  },

  logoIcon: {
    width: width,
    height: 44,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  cardContainer: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 90,
    height: 90,
  },

  roleTextStyle: {
    marginLeft: 20,
    flex: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
