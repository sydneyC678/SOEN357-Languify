import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import ToolBar from './ToolBar';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type GameCardProps = {
  title: string;
  description: string;
  content: string;
  color: string;
  onPress?: () => void;
};

const GameCard: React.FC<GameCardProps> = ({ title, description, content, color, onPress }) => (
  <TouchableOpacity 
    style={[styles.gameCard, { backgroundColor: color }]}
    onPress={onPress}
  >
    <View style={styles.gameTextContainer}>
      <Text style={styles.gameTitle}>{title}</Text>
      <Text style={styles.gameDescription}>{description}</Text>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  </TouchableOpacity>
);

const GamesPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Games & Challenges'>>();
  const { username } = route.params;

  const games = [
    {
      title: "Word match",
      description: "Match words to start arranging!",
      content: "27000",
      color: "#FFD166"
    },
    {
      title: "Sentence builder",
      description: "Put the words in the right order!",
      content: "10000",
      color: "#06D6A0"
    },
    {
      title: "Listen & Tap",
      description: "Train the words from the right order!",
      content: "10000",
      color: "#118AB2"
    },
    {
      title: "Flashcards sprint",
      description: "How many cars you spot right?",
      content: "22000",
      color: "#EF476F"
    },
    {
      title: "Mystery word",
      description: "Choose the word behind these words until",
      content: "9000",
      color: "#9775FA"
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Games</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            description={game.description}
            content={game.content}
            color={game.color}
            // Add onPress functionality here
          />
        ))}
      </ScrollView>
      <ToolBar username={username}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  gameCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gameTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  gameDescription: {
    fontSize: 14,
    color: '#333',
  },
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    padding: 10,
    minWidth: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default GamesPage;