import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import {Home} from './Home'
import {Register} from './Register'



const Stack = createStackNavigator();

class Main extends Component{
    render(){
        return(
            <SafeAreaView>
                <NavigationContainer>
                    <Stack.Navigator NinitialRouteName="Home">
                        <Stack.Screen name="Home" Component={Home}/>
                        <Stack.Screen name="Register" Component={Register}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        )
    }
}


function mapStateToProps(state) {
    return state;
}
const connectedMain = connect(mapStateToProps)(Main);
export { connectedMain as Main };
