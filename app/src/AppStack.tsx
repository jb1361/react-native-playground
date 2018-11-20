import ProfileScreen from './screens/profile';
import {createStackNavigator} from 'react-navigation';

const AppStack = createStackNavigator({
    Profile: {screen: ProfileScreen}
});

export default AppStack;
