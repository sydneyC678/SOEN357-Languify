import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type ProfileListItemProps = {
  listIcon: string;
  listText: string;
};

const ProfileListItem: React.FC<ProfileListItemProps> = ({
  listIcon,
  listText,
}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <FontAwesome5
        name={listIcon}
        size={20}
        color="#000"
        style={styles.listIcon}
      />
      <Text style={styles.listText}>{listText}</Text>
      <FontAwesome5
        name="chevron-right"
        size={20}
        color="#000"
        style={styles.listArrow}
      />
    </TouchableOpacity>
  );
};

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Account</Text>
        <Image
          source={require('../assets/profile.jpg')}
          style={styles.imageIcon}
        />
        <Text style={styles.name}>Sarah Johnson</Text>
        <Text style={styles.email}>sarahj@gmail.com</Text>

        <View style={styles.streak}>
          <FontAwesome5
            name="fire-alt"
            size={20}
            color="#fff"
            style={styles.streakIcon}
          />
          <Text style={styles.streakText}>Day Streak</Text>
          <Text style={styles.streakNb}>98</Text>
        </View>

        <ProfileListItem listIcon="comment-alt" listText="Languages" />
        <ProfileListItem listIcon="user-alt" listText="Personal Information" />
        <ProfileListItem listIcon="signal" listText="Progress & Stats" />
        <ProfileListItem listIcon="medal" listText="Achievements & Badges" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  header: {flexDirection: 'row', alignItems: 'center', padding: 10},
  searchBar: {flex: 1, padding: 10, borderRadius: 8},
  body: {alignItems: 'center', padding: 20},
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageIcon: {width: 100, height: 100, borderRadius: 50, marginBottom: 10},
  name: {fontSize: 20, fontWeight: 'bold'},
  email: {marginBottom: 20},
  streak: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  streakIcon: {marginRight: 10},
  streakText: {color: '#fff', marginRight: 10},
  streakNb: {color: '#fff', fontWeight: 'bold', fontSize: 16},
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
  },
  listIcon: {marginRight: 10},
  listText: {flex: 1, color: '#000'},
  listArrow: {marginLeft: 'auto'},
});

export default ProfilePage;