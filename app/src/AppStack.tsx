import {createStackNavigator} from 'react-navigation';
import {ProfileScreen} from 'screens/profile';

const AppStack = createStackNavigator({
    Profile: {screen: ProfileScreen}
});

export default AppStack;
