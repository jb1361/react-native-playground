import {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

class ProfileScreen extends Component {

    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to profile screen</Text>
                <Text style={styles.instructions}>To get started, edit App.tsx</Text>
            </View>
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

export default ProfileScreen;
