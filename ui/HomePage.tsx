import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import ToolBar from './ToolBar';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type HomePageProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomePage: React.FC<HomePageProps> = ({ route, navigation }) => {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />
      <Text style={styles.welcomeText}>Welcome back,</Text>
      <Text style={styles.username}>{username}!</Text>

      <TouchableOpacity
        style={[styles.button, styles.practiceButton]}
        onPress={() => navigation.navigate('Practice', {username})}>
        <Text style={styles.buttonText}>Practice</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.tutorButton]}
        onPress={() => navigation.navigate('My AI tutor', {username})}>
        <Text style={styles.buttonText}>My AI tutor</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.cultureButton]}
        onPress={() => navigation.navigate('Cultural Context & Immersion', {username})}>
        <Text style={styles.cultureButtonText}>
          Cultural Context & Immersion
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.gamesButton]}
        onPress={() => navigation.navigate('Games & Challenges', {username})}>
        <Text style={styles.buttonText}>Games & Challenges</Text>
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Total practice time today</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill}>
            <Text style={styles.progressTime}>13/20 min</Text>
          </View>
        </View>
      </View>
      <ToolBar username={username}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30,
    paddingTop: 80,
    paddingBottom: 60,
    justifyContent: 'space-between',
  },
  searchBar: {
    backgroundColor: '#eee',
    borderRadius: 100,
    padding: 20,
  },
  welcomeText: {
    fontSize: 30,
    marginTop: 20,
  },
  username: {
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  practiceButton: {
    backgroundColor: '#FE4F32',
    justifyContent: 'center',
  },
  tutorButton: {
    backgroundColor: '#D7BAFE',
    height: 200,
    justifyContent: 'center',
  },
  cultureButton: {
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  cultureButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  gamesButton: {
    backgroundColor: '#96D9FF',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
  progressContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  progressText: {
    marginBottom: 5,
  },
  progressBar: {
    height: 30,
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    width: '65%',
    backgroundColor: '#D3D3D3',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressTime: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HomePage;
