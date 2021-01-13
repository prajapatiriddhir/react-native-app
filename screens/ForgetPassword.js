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
} from 'react-native';

export default class Forgetpassword extends Component {
  constructor(props) {
    super(props);
    state = {
      email: '',
      password: '',
    };
  }

  onClickListener = (viewId) => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoIcon}
          resizeMode="contain"
          source={require('../assets/logo.png')}
        />
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../assets/ic_email.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({email})}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener('Send')}>
          <Text style={styles.loginText}>Send</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.linkClickStyle}
          onPress={() => this.props.navigation.navigate('LoginScreen')}>
          <Text style={{color: '#3a79ce'}}>Already Registered? Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#f2f3f7',
    borderRadius: 5,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
    justifyContent: 'center',
  },

  logoIcon: {
    width: 280,
    height: 44,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
  },
  forgetpassword: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 250,
    textAlign: 'right',
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
    marginTop: 15,
  },
  loginText: {
    color: 'white',
  },
  linkClickStyle: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 300,
    borderRadius: 30,
    color: '#3a79ce',
  },
});
