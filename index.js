/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { HomePage } from './pages/HomePage/HomePage';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name="Home"
//                     component={App}
//                     options={{title: 'Welcome'}}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => HomePage);
