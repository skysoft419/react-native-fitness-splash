/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import tutorial from "./src/screen/tutorial"

AppRegistry.registerComponent(appName, () => tutorial);
