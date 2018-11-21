import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './screens/profile';
import HomeScreen from './screens/home-screen';

export const AppStack = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen}
},
    {
    initialRouteName: 'Home'
});
