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
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from './screens/home-screen';

class App extends Component {
    render() {
        return (
            <HomeScreen/>
            // <View style={styles.container}>
            //     <Text style={styles.welcome}>Welcome to React Native!!!</Text>
            //     <Text style={styles.instructions}>To get started, edit App.tsx</Text>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default App;
