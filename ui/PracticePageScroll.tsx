import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PracticePageScroll = ({
  currentIndex,
  onLeftPress,
  onRightPress,
}: {
  currentIndex: number;
  onLeftPress: () => void;
  onRightPress: () => void;
}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.arrowButton} onPress={onLeftPress}>
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        {[0, 1, 2, 3].map((index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.arrowButton} onPress={onRightPress}>
        <Text style={styles.arrowText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  arrowButton: {
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 5,
  },
  arrowText: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 30,
  },
});

export default PracticePageScroll;
