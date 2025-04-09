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
import { NavigationProp as ReactNavigationProp } from '@react-navigation/native';
import CommunityPage from './ui/CommunityPage';
import Settings from './ui/Settings';

export type RootStackParamList = {
  SignUp: undefined,
  Login: undefined,
  Home: { username: string };
  Practice: { username: string };
  'My AI tutor': {username: string};
  'Cultural Context & Immersion': { username: string };
  'Games & Challenges': { username: string };
  'Profile Page': { username: string };
  'Community Page': undefined;
  'Settings': { username: string };
};

export type NavigationProp = ReactNavigationProp<RootStackParamList>;

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
        <Stack.Screen name="Community Page" component={CommunityPage} />
        <Stack.Screen name="Profile Page" component={ProfilePage} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
