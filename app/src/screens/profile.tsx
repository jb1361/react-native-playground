import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class ProfileScreen extends Component {

    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Text style={styles.welcome}>Welcome to {this.props.navigation.getParam('name')}'s profile screen</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
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
