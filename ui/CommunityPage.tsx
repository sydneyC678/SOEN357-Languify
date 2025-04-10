import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageSourcePropType, TextInput } from 'react-native';
import ToolBar from './ToolBar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';


interface FriendItem {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
}

interface LeaderboardItem {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
  streak: number;
  rank: number;
}

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const friends: FriendItem[] = [
    { id: '1', name: 'Miguel Torres', avatar: require('../assets/miguel.png') },
    { id: '2', name: 'Emma Thorn', avatar: require('../assets/emma.png') },
    { id: '3', name: 'Sofia Rivera', avatar: require('../assets/sofia.png') },
  ];

  const leaderboard: LeaderboardItem[] = [
    { id: '1', name: 'Noah Williams', avatar: require('../assets/noah.png'), streak: 267, rank: 1 },
    { id: '2', name: 'Olivia Carter', avatar: require('../assets/olivia.png'), streak: 257, rank: 2 },
    { id: '3', name: 'Sofia Rivera', avatar: require('../assets/sofia.png'), streak: 230, rank: 3 },
    { id: '4', name: 'Emma Thorn', avatar: require('../assets/emma.png'), streak: 190, rank: 4 },
    { id: '5', name: 'Lucas Martin', avatar: require('../assets/lucas.png'), streak: 174, rank: 5 },
  ];

  const route = useRoute<RouteProp<RootStackParamList, 'Community Page'>>();
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} stickyHeaderIndices={[0]}>
        {/* Search Bar - Sticky Header */}
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <FontAwesome5 name="search" size={16} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <Text style={styles.pageTitle}>Community</Text>
        
        {/* My Friends Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My friends</Text>
            <TouchableOpacity style={styles.addButton}>
              <FontAwesome5 name="plus" size={16} color="#000" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.friendsContainer}>
            {friends.map((friend) => (
              <View key={friend.id} style={styles.friendItem}>
                <Image source={friend.avatar} style={styles.avatar} />
                <Text style={styles.friendName}>{friend.name}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Leaderboard Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Leaderboard</Text>
          
          <View style={styles.leaderboardContainer}>
            {leaderboard.map((user) => (
              <View key={user.id} style={[
                styles.leaderboardItem, 
                user.rank === 1 ? styles.firstRank : null
              ]}>
                <Text style={styles.rankNumber}>#{user.rank}</Text>
                <Image source={user.avatar} style={styles.leaderboardAvatar} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <View style={styles.streakContainer}>
                    <FontAwesome5 name="fire" size={14} color="#FFD700" />
                    <Text style={styles.streakText}>{user.streak} days streak</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      
      <ToolBar username={username}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  searchBarContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    padding: 0,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  friendsContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 8,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  friendName: {
    fontSize: 16,
  },
  leaderboardContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F7FF',
    padding: 12,
    marginBottom: 2,
  },
  firstRank: {
    backgroundColor: '#B3E0FF',
  },
  rankNumber: {
    width: 30,
    fontWeight: 'bold',
    fontSize: 14,
  },
  leaderboardAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  streakText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
});

export default CommunityPage;