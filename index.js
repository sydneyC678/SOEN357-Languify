/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

global.__RCTFabricEnabled = false;
global.__BRIDGLESS__ = false;

AppRegistry.registerComponent(appName, () => App);
