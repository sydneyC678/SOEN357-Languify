import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToolBar from './ToolBar';

const AITutorPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AI tutor Page</Text>
      <ToolBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  text: { fontSize: 24, textAlign: 'center' },
});

export default AITutorPage;

