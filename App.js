import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import {store} from './_store'
import { Provider } from 'react-redux';
// import '@babel/helper-create-class-features-plugin'



export default function App() {
  return (
    <NavigationContainer>
        <Provider store={store}></Provider>
      <StackNavigation>
      </StackNavigation>
    </NavigationContainer>
  );
}
