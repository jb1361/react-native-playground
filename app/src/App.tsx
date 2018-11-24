/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {createNavigationContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/home-screen';
import ProfileScreen from './screens/profile';

const AppNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
        Profile: {screen: ProfileScreen, name: String}
    },
    {
        initialRouteName: 'Home'
    });

const AppContainer = createNavigationContainer(AppNavigator);

export default class App extends Component {
    render() {
        return <AppContainer/>;
    }
}
