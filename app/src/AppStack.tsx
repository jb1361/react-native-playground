import {createStackNavigator} from 'react-navigation';
import ProfileScreen from './screens/profile';

export const AppStack = createStackNavigator({
    Profile: {screen: ProfileScreen}
});
