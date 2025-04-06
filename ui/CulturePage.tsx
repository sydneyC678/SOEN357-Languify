import React from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image} from 'react-native';
import ToolBar from './ToolBar';

interface CultureGridItemProps {
  title: string;
  image: any; 
}

const CultureGridItem: React.FC<CultureGridItemProps> = ({title, image}) => {
  return (
    <TouchableOpacity style={styles.gridItem}>
      <Image source={image} style={styles.gridImage}/>
      <Text style={styles.gridTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const CulturePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.title}>Explore the Culture</Text>
        <Text style={styles.subtitle}>
            Discover traditions, customs, and history while learning your new language!
        </Text>

        <View style={styles.langDropdown}>
          <Text style={styles.lang}>&#x1f1f2;&#x1f1fd;   &#x25BC;</Text>
        </View>

        <View style={styles.gridContainer}>
          <CultureGridItem title="Regional Insights" image={require('../assets/insights.png')}/>
          <CultureGridItem title="Traditions & Customs" image={require('../assets/traditions.png')}/>
          <CultureGridItem title="Food & Cuisine" image={require('../assets/food.png')}/>
          <CultureGridItem title="Music & Entertainment" image={require('../assets/music.png')}/>
          <CultureGridItem title="Common Cultural Phrases" image={require('../assets/common.png')}/>
        </View>
      </ScrollView>
      <ToolBar />
    </View>


  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  header: {flexDirection: 'row', alignItems: 'center', padding: 10},
  searchBar: {flex: 1, padding: 10, borderRadius: 8},
  content: {flex: 1, padding: 20},
  title: {fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginBottom: 10},
  subtitle: {fontSize: 16, marginBottom: 20},
  langDropdown: {alignSelf: 'flex-start', backgroundColor: '#96D9FF', paddingLeft: 20, borderRadius: 5, marginBottom: 20},
  lang: {fontSize: 18, fontWeight: 'bold', paddingRight: 20},
  gridContainer: {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'},
  gridItem: {width: '45%', marginBottom: 10, borderRadius: 10, overflow: 'hidden'},
  gridImage: {width: '100%', height: 160, resizeMode: 'cover'},
  gridTitle: {padding: 10, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', textAlign: 'center', position: 'absolute', bottom: 0, left: 0, right: 0},
  body: {
    paddingBottom: 100, // Add padding at the bottom to ensure the content is scrollable and the toolbar doesn't block it
  },
});

export default CulturePage;
