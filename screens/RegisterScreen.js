import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import { authActions } from '../_actions';
import { status } from '../_constants';

const RegisterURL = 'http://api.discoveri.in/api/register';

import API from './common/API';
import Loader from './common/Loader';
import Toast from 'react-native-simple-toast';

export class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      loading: false,
    };
  }

  onClickListener = (viewId) => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.register_status !== this.props.register_status && this.props.register_status === status.SUCCESS) {
      this.props.navigation.navigate('SelectRoleScreen');
    }
  }

  render() {
    const { loading } = this.state;

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
            placeholder="name"
            keyboardType="default"
            underlineColorAndroid="transparent"
            onChangeText={(name) => this.setState({ name })}
          />
        </View>
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
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../assets/ic_password.png')}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <Loader loading={loading} />

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.registeWsCall()}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>

        {/* <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('SelectRoleScreen')}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight> */}

        <Text
          style={{
            alignItems: 'center',
            marginBottom: 15,
          }}>
          OR
        </Text>
        <View style={styles.SocialImageContainer}>
          <Image
            style={styles.socialIcon}
            source={require('../assets/google.png')}
          />
          <Image
            style={styles.socialIcon}
            source={require('../assets/facebook.png')}
          />
          <Image
            style={styles.socialIcon}
            source={require('../assets/twitter.png')}
          />
        </View>

        <TouchableHighlight
          style={styles.linkClickStyle}
          onPress={() => this.props.navigation.navigate('LoginScreen')}>
          <Text>Already Registered? Login</Text>
        </TouchableHighlight>
      </View>
    );
  }

  registeWsCall = async () => {
    let body = new FormData();

    const { name, email, password } = this.state;

    if (name == '') {
      Alert.alert('Please enter name');
    } else if (email == '' || password == '') {
      Alert.alert('Please enter email and password');
    } else {
      console.log(email);
      body.append('firstName', name);
      body.append('email', email);
      body.append('password', password);

      // this.setState({loading: true});
      this.props.dispatch(authActions.register(body));
      // API.postApiCall(
      //   RegisterURL,
      //   body,
      //   this.registerResponse,
      //   this.failureResponse,
      // );
    }
  };

  // registerResponse = (response) => {
  //   // this.setState({ loading: false });
  //   // console.log('Register Response', response);
  //   if (response.data.status === 200) {
  //     setTimeout(() => {
  //       Toast.show(response.data.message);
  //       this.props.navigation.navigate('SelectRoleScreen');
  //     }, 10);
  //   } else {
  //     setTimeout(() => {
  //       Alert.alert('Error! ', response.data.validation_error);
  //     }, 10);
  //   }
  // };
  // failureResponse = (error) => {
  //   // console.log('Register Error', error);
  //   // this.setState({ loading: false });
  //   setTimeout(() => {
  //     Toast.show('Error !', error.validation_error);
  //   }, 50);
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  SocialImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  socialIcon: {
    width: 46,
    height: 46,
    marginLeft: 10,
    justifyContent: 'center',
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
    borderBottomColor: '#DCDCDC',
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
    marginTop: 15,
    backgroundColor: '#00b5ec',
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




function mapStateToProps(state) {
  const { register_status, registerData } = state.auth;
  return {
    register_status,
    registerData
  };
}
export default connect(mapStateToProps)(RegisterScreen);
