import React, {Component} from 'react';
import {Button} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';

interface HomeScreenProps extends NavigationInjectedProps {
  someReduxInjectedvalue: string;
}

class HomeScreen extends Component<HomeScreenProps> {
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
