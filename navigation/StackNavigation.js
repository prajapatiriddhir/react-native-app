import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import QuizScreen from '../screens/QuizScreen';
import Elearn from '../screens/Elearn';
import HealthCare from '../screens/HealthCare';
import DrawerScreen from '../screens/DrawerScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SelectRoleScreen from '../screens/SelectRoleScreen';
import ForgetPassword from '../screens/ForgetPassword';
import Icon from 'react-native-vector-icons/Ionicons';
import SelfDiscoveri from '../screens/SelfDiscoveri';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function Quiznavigate({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Self Discoveri"
        component={SelfDiscoveri}
        options={{
          title: 'MI test',
          /*
          // I have added this code for drawer toggle
          */
          //  Start
          headerLeft: () => (
            <View style={{marginStart: 20}}>
              <Icon
                name="menu-outline"
                size={27}
                color="#000"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </View>
          ),
          /*
          // END
          */
        }}
      />
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}

function ElearnNavigate({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="E-Learn"
        component={Elearn}
        options={{
          title: 'Elearn',
          /*
          // I have added this code for drawer toggle
          */
          //  Start
          headerLeft: () => (
            <View style={{marginStart: 20}}>
              <Icon
                name="menu-outline"
                size={27}
                color="#000"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </View>
          ),
          /*
          // END
          */
        }}
      />
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}

function HealthCareNavigate({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HealthCare"
        component={HealthCare}
        options={{
          title: 'HealthCare',
          /*
          // I have added this code for drawer toggle
          */
          //  Start
          headerLeft: () => (
            <View style={{marginStart: 20}}>
              <Icon
                name="menu-outline"
                size={27}
                color="#000"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </View>
          ),
          /*
          // END
          */
        }}
      />
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={DrawerScreen}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              size={size}
              color={focused ? '#1862C6' : '#757575'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="E-Learn"
        component={ElearnNavigate}
        options={{
          title: 'E-Learn',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="book"
              size={size}
              color={focused ? '#1862C6' : '#757575'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Self Discoveri"
        component={Quiznavigate}
        options={{
          title: 'Self Discoveri',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="flashlight"
              size={size}
              color={focused ? '#1862C6' : '#757575'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="HealthCare"
        component={HealthCareNavigate}
        options={{
          title: 'HealthCare',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="clipboard"
              size={size}
              color={focused ? '#1862C6' : '#757575'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function Details() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details here!</Text>
    </View>
  );
}

function AuthNavigate({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="SelectRoleScreen" component={SelectRoleScreen} />
    </Stack.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Auth" component={AuthNavigate} />
      <RootStack.Screen name="Home" component={MyDrawer} />
    </RootStack.Navigator>
  );
};

function StackNavigation() {
  return <MainStackNavigator></MainStackNavigator>;
}

export default StackNavigation;
