import * as React from 'react';
import {View, Text, Button, Settings} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import SearchScreen from './SearchScreen';
import SearchDetails from './SearchDetails';
import HomeDetails from './HomeDetails';
import ComposeScreen from './ComposeScreen';
import PlayScreen from './PlayScreen';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const DrawerScreen = (navigation) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Add') {
            iconName = focused ? 'add-circle-outline' : 'add-circle-outline';
          } else if (route.name === 'Play') {
            iconName = focused ? 'play' : 'play';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1862C6',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreenStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Add" component={ComposeStack} />
      <Tab.Screen name="Play" component={PlayStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
};

function HomeScreenStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          /*
            // I have added this code for drawer toggle
            */
          //  Start
          headerLeft: () => (
            <View style={{marginStart: 20}}>
              <Icon
                name="menu-outline"
                size={28}
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
      <Stack.Screen name="HomeDetails" component={HomeDetails} />
    </Stack.Navigator>
  );
}

function SearchStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
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
      <Stack.Screen name="SearchDetails" component={SearchDetails} />
    </Stack.Navigator>
  );
}

function ComposeStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Compose"
        component={ComposeScreen}
        options={{
          title: 'Compose',
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
    </Stack.Navigator>
  );
}

function PlayStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Play"
        component={PlayScreen}
        options={{
          title: 'Play',
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
    </Stack.Navigator>
  );
}

function SettingsStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
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
    </Stack.Navigator>
  );
}

export default DrawerScreen;
