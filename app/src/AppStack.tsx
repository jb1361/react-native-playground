import {createStackNavigator} from 'react-navigation';
import {ProfileScreen} from './screens/profile';

const App = createStackNavigator({
    Profile: {screen: ProfileScreen},
});

export default App;