import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationProp} from '../App';

type ToolBarProps = {
  username: string;
}

const ToolBar: React.FC<ToolBarProps> = ({ username }) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.toolbar}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home', { username })}
        style={styles.button}>
        <FontAwesome5 name="home" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Games & Challenges', {username})}
        style={styles.button}>
        <FontAwesome5 name="trophy" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Profile Page', {username})}
        style={styles.button}>
        <FontAwesome5 name="user-circle" size={24} color="#000" solid />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Community Page', {username})}
        style={styles.button}>
        <FontAwesome5 name="users" size={24} color="#000" solid />
      </TouchableOpacity>
      

      <TouchableOpacity
        onPress={() => navigation.navigate('Settings', {username})}
        style={styles.button}>
        <FontAwesome5 name="cog" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#f8f8f8',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: 10,
  },
  button: {
    padding: 10,
  },
});

export default ToolBar;
