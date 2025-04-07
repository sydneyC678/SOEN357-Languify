import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import HomePage from './ui/HomePage';
import PracticePage from './ui/PracticePage';
import AITutorPage from './ui/AITutorPage';
import CulturePage from './ui/CulturePage';
import GamesPage from './ui/GamesPage';
import ProfilePage from './ui/ProfilePage';

export type RootStackParamList = {
  Home: undefined;
  Practice: undefined;
  'My AI tutor': undefined;
  'Cultural Context & Immersion': undefined;
  'Games & Challenges': undefined;
  'Profile Page': undefined
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Practice" component={PracticePage} />
        <Stack.Screen name="My AI tutor" component={AITutorPage} />
        <Stack.Screen
          name="Cultural Context & Immersion"
          component={CulturePage}
        />
        <Stack.Screen name="Games & Challenges" component={GamesPage} />
        <Stack.Screen name="Profile Page" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
