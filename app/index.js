/** @format */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { Client } from 'bugsnag-react-native';
const bugsnag = new Client("3d3f6ed00f43fa9815379c72e47384c4");
AppRegistry.registerComponent(appName, () => App);
