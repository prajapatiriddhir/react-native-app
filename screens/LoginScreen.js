import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  AsyncStorage,
} from 'react-native';
import React, {useState, useEffect, Component} from 'react';
import {isSignedInSession, onSignIn} from '../auth';

const LoginURL = 'http://api.discoveri.in/api/submitLogin';

import API from './common/API';
import Loader from './common/Loader';
import Toast from 'react-native-simple-toast';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';

import MyDrawer from '../navigation/StackNavigation';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      userInfo: null,
      gettingLoginStatus: true,
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentDidMount() {
    //initial configuration
    GoogleSignin.configure({
      //It is mandatory to call this method before attempting to call signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Repleace with your webClientId generated from Firebase console
      // webClientId:
      //   '206854113210-8f08q9bi8akr7f7vat4n5n71dbuuvgq0.apps.googleusercontent.com',
      androidClientId:
        '206854113210-t4uge9n52hqjdl58jko1plao9b4l3ouc.apps.googleusercontent.com',
    });
    //Check if user is already signed in
    this._isSignedIn();

    isSignedInSession()
      .then((res) => this.setState({signedIn: res, checkedSignIn: true}))
      .catch((err) => alert('An error occurred'));
  }

  _isSignedIn = async () => {
    console.log('_isSignedIn');

    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      // alert('User is already signed in');
      //Get the User details as user is already signed in
      console.log('User is already signed in');

      this._getCurrentUserInfo();
    } else {
      //alert("Please Login");
      console.log('Please Login');
    }
    this.setState({gettingLoginStatus: false});
  };

  _getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('User Info --> ', userInfo);
      this.setState({userInfo: userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        // alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };

  _signIn = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      this.setState({userInfo: userInfo});
      Toast.show('Login Success');

      onSignIn().then(() => this.props.navigation.navigate('Home'));
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };

  _signOut = async () => {
    //Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({userInfo: null}); // Remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  // submit selected question
  LoginButtonAction = async () => {
    let body = new FormData();

    const {email, password} = this.state;

    if (email == '' || password == '') {
      Alert.alert('Please enter email and password');
    } else {
      console.log(email);
      body.append('email', email);
      body.append('password', password);

      this.setState({loading: true});
      API.postApiCall(LoginURL, body, this.LoginResponse, this.failureResponse);
    }
  };

  LoginResponse = (response) => {
    this.setState({loading: false});
    console.log('Login Response', response);
    if (response.data.status === 200) {
      setTimeout(() => {
        Toast.show(response.data.message);

        onSignIn().then(() => this.props.navigation.navigate('Home'));
      }, 10);
    } else {
      setTimeout(() => {
        Alert.alert('Error! ', response.data.msg);
      }, 10);
    }
  };
  failureResponse = (error) => {
    console.log('Login Error', error);
    this.setState({loading: false});
    setTimeout(() => {
      Toast.show(error.message);
    }, 50);
  };

  static navigationOptions = {
    header: null,
  };

  render() {
    const {loading} = this.state;
    const {checkedSignIn, signedIn} = this.state;
    if (!checkedSignIn) {
      return null;
    }

    if (signedIn) {
      // this.props.navigation.navigate('Home');
      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }

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
            onChangeText={(password) => this.setState({password})}
          />
        </View>
        <TouchableHighlight
          style={styles.forgetpassword}
          onPress={() => this.props.navigation.navigate('ForgetPassword')}>
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <Loader loading={loading} />

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.LoginButtonAction()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <Text
          style={{
            alignItems: 'center',
            marginBottom: 15,
          }}>
          OR
        </Text>
        <View style={styles.SocialImageContainer}>
          <TouchableHighlight onPress={() => this._signIn()}>
            <Image
              style={styles.socialIcon}
              source={require('../assets/google.png')}
            />
          </TouchableHighlight>

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
          style={styles.newAccountStyle}
          onPress={() => this.props.navigation.navigate('RegisterScreen')}>
          <Text style={{color: '#3a79ce'}}>New user ? Create Account</Text>
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
    flexDirection: 'column',
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
  SocialImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
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
  socialIcon: {
    width: 46,
    height: 46,
    marginLeft: 10,
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
  newAccountStyle: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 300,
    borderRadius: 30,
    color: '#3a79ce',
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
  },
  loginText: {
    color: 'white',
  },
});
