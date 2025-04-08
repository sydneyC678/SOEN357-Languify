import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToolBar from './ToolBar';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

const PracticePage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Practice'>>();
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Practice Page</Text>
      <ToolBar username={username}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  text: { fontSize: 24, textAlign: 'center' },
});

export default PracticePage;
