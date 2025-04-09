import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ToolBar from './ToolBar';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App';

const settingsOptions = [
  {label: 'Preferences', icon: 'sliders-h'},
  {label: 'Notifications', icon: 'bell'},
  {label: 'Privacy & Security', icon: 'lock'},
  {label: 'Language & Speech Settings', icon: 'language'},
  {label: 'Parental Control', icon: 'user-shield'},
  {label: 'Accessibility', icon: 'universal-access'},
  {label: 'Help & Support', icon: 'info-circle'},
];

const Settings = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Games & Challenges'>>();
  const {username} = route.params;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />
      <Text style={styles.title}>Settings</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <View style={styles.itemContent}>
              <FontAwesome5
                name={option.icon}
                size={18}
                color="#000"
                style={styles.icon}
              />
              <Text style={styles.label}>{option.label}</Text>
              <FontAwesome5
                name="chevron-right"
                size={16}
                color="#000"
                style={styles.chevron}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ToolBar username={username} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 50,
    paddingHorizontal: 30,
  },
  searchBar: {
    backgroundColor: '#eee',
    borderRadius: 100,
    padding: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    alignSelf: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#D7BAFE',
    borderRadius: 20,
    padding: 20,
    marginBottom: 5,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  chevron: {
    marginLeft: 'auto',
  },
});

export default Settings;
