import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import HomePage from './ui/HomePage';
import PracticePage from './ui/PracticePage';
import AITutorPage from './ui/AITutorPage';
import CulturePage from './ui/CulturePage';
import GamesPage from './ui/GamesPage';
import LoginPage from './ui/LoginPage';
import SignUpPage from './ui/SignUpPage';
import ProfilePage from './ui/ProfilePage';

export type RootStackParamList = {
  SignUp: undefined,
  Login: undefined,
  Home: {username: string};
  Practice: undefined;
  'My AI tutor': undefined;
  'Cultural Context & Immersion': undefined;
  'Games & Challenges': undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false}}
        />
        <Stack.Screen name="Practice" component={PracticePage} />
        <Stack.Screen name="My AI tutor" component={AITutorPage} />
        <Stack.Screen
          name="Cultural Context & Immersion"
          component={CulturePage}
        />
        <Stack.Screen name="Games & Challenges" component={GamesPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
