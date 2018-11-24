import React, {Component} from 'react';
import {Button} from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => this.props.navigation.navigate('Profile', {name: 'Jane'})}
            />
        );
    }
}
export default HomeScreen;
