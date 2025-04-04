import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GamesPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Games Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  text: {fontSize: 24, textAlign: 'center'},
});

export default GamesPage;
