import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import PracticePageScroll from './PracticePageScroll';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

const { width } = Dimensions.get('window');

const PracticePage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Practice'>>();
  const { username } = route.params;

  const scrollRef = useRef<ScrollView>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const handleScroll = (event: any) => {
      const index = Math.round(event.nativeEvent.contentOffset.x / width);
      setPageIndex(index);
    };

  const scrollToIndex = (index: number) => {
    scrollRef.current?.scrollTo({ x: index * width, animated: true });
  };

  const handleLeft = () => {
    if (pageIndex > 0) scrollToIndex(pageIndex - 1);
  };

  const handleRight = () => {
    if (pageIndex < 7) scrollToIndex(pageIndex + 1);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollRef}
      >

        {/* Today's Words */}
        <View style={styles.page}>
          <Text style={styles.sectionTitle}>Today’s words</Text>
          <View style={styles.wordCard}>
            <Text style={styles.word}>Cumpleaños</Text>
            <Text style={styles.partOfSpeech}>noun</Text>
            <Text style={styles.translation}><Text style={styles.italic}>Birthday</Text></Text>
            <View style={styles.exampleBlock}>
              <Text style={styles.example2}>Hoy es mi cumpleaños.</Text>
              <Text style={styles.translationSmall}>Today is my birthday.</Text>
            </View>
            <View style={styles.exampleBlock}>
              <Text style={styles.example}>Feliz cumpleaños, amigo.</Text>
              <Text style={styles.translationSmall}>Happy birthday, friend.</Text>
            </View>
          </View>
          <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Categories</Text>
          <View style={styles.categoryGrid}>
            {['Work & Business', 'Health & Wellness', 'Daily Conversations', 'Family & Relationships', 'Shopping & Money', 'All Categories'].map((label) => (
              <TouchableOpacity key={label} style={styles.categoryButton}>
                <Text style={styles.categoryText}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Daily Conversations Page */}
        <View style={styles.page}>
          <Text style={styles.title}>Daily conversations</Text>
          <View style={styles.exerciseGrid}>
            <TouchableOpacity style={styles.exerciseCard}>
              <Text style={styles.exerciseText}>Vocabulary Exercises</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exerciseCard}>
              <Text style={styles.exerciseText}>Grammar & Spelling</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exerciseCard}>
              <Text style={styles.exerciseText}>Listening Comprehension</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exerciseCard}>
              <Text style={styles.exerciseText}>Dialogues</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exerciseCard}>
              <Text style={styles.exerciseText}>Writing Exercises</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exerciseCard}>
              <Text style={styles.exerciseText}>Pronunciation</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Vocabulary Exercises Page */}
        <View style={styles.page}>
          <Text style={styles.title}>Vocabulary exercises</Text>
          <Text style={styles.instruction}>
            Match the words with their correct translations.
          </Text>
          <View style={styles.matchingContainer}>
            <View style={styles.matchingColumn}>
              <TouchableOpacity style={styles.spanishCard}>
                <Text style={styles.spanishText}>¿Cómo estás?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.spanishCard}>
                <Text style={styles.spanishText}>Me llamo Juan.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.spanishCard}>
                <Text style={styles.spanishText}>Buenos días.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.spanishCard}>
                <Text style={styles.spanishText}>¿Cómo te llamas?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.spanishCard}>
                <Text style={styles.spanishText}>Gracias, estoy bien.</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.matchingColumn}>
              <TouchableOpacity style={styles.englishCard}>
                <Text style={styles.englishText}>My name is Juan.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.englishCard}>
                <Text style={styles.englishText}>What's your name?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.englishCard}>
                <Text style={styles.englishText}>How are you?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.englishCard}>
                <Text style={styles.englishText}>Thank you, I'm good.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.englishCard}>
                <Text style={styles.englishText}>Good morning.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Grammar & Spelling Page */}
        <View style={styles.page}>
          <Text style={styles.title}>Grammar & Spelling</Text>
          <Text style={styles.instruction}>
            Choose the correct form of the verb to complete each sentence.
          </Text>
          <View style={styles.grammarContainer}>
            <Text style={styles.sentenceLabel}>Sentence 1</Text>
            <Text style={styles.sentenceText}>Yo _____ al cine todos los sábados.</Text>
            <TouchableOpacity style={styles.verbOption}>
              <Text style={styles.verbOptionText}>voy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verbOption}>
              <Text style={styles.verbOptionText}>vas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verbOption}>
              <Text style={styles.verbOptionText}>vamos</Text>
            </TouchableOpacity>
            
            <Text style={[styles.sentenceLabel, {marginTop: 20}]}>Sentence 2</Text>
            <Text style={styles.sentenceText}>Ellos _____ a la fiesta mañana.</Text>
            <TouchableOpacity style={styles.verbOption}>
              <Text style={styles.verbOptionText}>voy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verbOption}>
              <Text style={styles.verbOptionText}>van</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.verbOption}>
              <Text style={styles.verbOptionText}>vas</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Listening Comprehension */}
        <View style={styles.page}>
          <Text style={styles.title}>Listening Comprehension</Text>
          <Text style={styles.instruction}>
            Listen to the audio clip and choose the correct answer based on what you heard.
          </Text>
          <Text style={styles.audio}>▶️ [Audio Placeholder]</Text>
          <Text style={styles.question}>
            <Text style={styles.bold}>Question:</Text> What did María say she will do tomorrow?
          </Text>
          <Text>🔘 Ir al cine con sus amigos. (Go to the movies with her friends.)</Text>
          <Text>⚪ Cocinar una cena especial. (Cook a special dinner.)</Text>
          <Text>⚪ Estudiar para un examen. (Study for an exam.)</Text>
          <Text>⚪ Viajar a otra ciudad. (Travel to another city.)</Text>
        </View>

        {/* Dialogues */}
        <View style={styles.page}>
          <Text style={styles.title}>Dialogues</Text>
          <Text style={styles.instruction}>
            Read the following conversation between two friends and fill in the missing words based on the context.
          </Text>
          <Text style={styles.dialogue}>
            Carlos: Hola, Julia! ¿Qué tal?{'\n'}
            Julia: ¡Hola, Carlos! Estoy (1) _____ ¿Y tú?{'\n'}
            Carlos: Muy bien, gracias. Oye, hace tiempo que no salimos. ¿Te gustaría hacer algo esta tarde?{'\n'}
            Julia: Sí, ¿qué me recomendarías? ¿Qué tienes en mente?{'\n'}
            Carlos: Podemos ir al (2) _____ y después tomar algo en una cafetería.{'\n'}
            Julia: Suena genial. ¿A qué hora nos encontramos?{'\n'}
            Carlos: Me parece bien a las (3) _____ en la entrada.{'\n'}
            Julia: Sí, perfecto. Nos vemos allí.
          </Text>
          <Text style={styles.optionsTitle}>Choose the correct answers:</Text>
          <Text style={styles.answerOption}>📍 cansada / cine / seis</Text>
          <Text style={styles.answerOption}>📍 emocionada / parque / cuatro</Text>
          <Text style={styles.answerOption}>📍 ocupada / restaurante / ocho</Text>
        </View>

        {/* Writing Exercises */}
        <View style={styles.page}>
          <Text style={styles.title}>Writing Exercises</Text>
          <Text style={styles.instruction}>
            Write a short paragraph (5-7 sentences) describing a typical day in your life. Use complete sentences and try to include details about your morning routine, daily activities and evening routine.
          </Text>
          <Text style={styles.example}>Example prompts:</Text>
          <Text>• What time do you wake up?</Text>
          <Text>• What do you usually eat for breakfast?</Text>
          <Text>• Do you go to school or work? What do you do there?</Text>
          <Text>• How do you spend your free time?</Text>
          <Text>• What do you do before going to bed?</Text>
          <Text style={styles.challenge}>Challenge</Text>
          <Text>Try to use at least five verbs and three adjectives to your paragraph.</Text>
          <TextInput
            style={[styles.inputBox]}
            multiline
            numberOfLines={6}
            placeholder="Type here..."
          />
          <TouchableOpacity style={styles.doneButton}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>

        {/* Pronunciation */}
        <View style={styles.page}>
          <Text style={styles.title}>Pronunciation</Text>
          <Text style={styles.instruction}>
            Repeat this sentence out loud.
          </Text>
          <Text style={styles.audio}>🔊 "Me gusta aprender idiomas."</Text>
          <TouchableOpacity style={styles.micButton}>
            <Text style={styles.micIcon}>🎤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipButton}>
            <Text>Skip this exercise</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <PracticePageScroll
        currentIndex={pageIndex}
        onLeftPress={handleLeft}
        onRightPress={handleRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  searchBar: {
    backgroundColor: '#eee',
    borderRadius: 100,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  page: {
    width: width,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  instruction: {
    fontSize: 16,
    marginVertical: 10,
  },
  question: {
    marginVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  audio: {
    fontSize: 18,
    marginVertical: 10,
  },
  dialogue: {
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 22,
  },
  answerOption: {
    backgroundColor: 'orange',
    padding: 6,
    marginVertical: 5,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  optionsTitle: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  example: {
    marginTop: 10,
    fontWeight: '600',
  },
  challenge: {
    marginTop: 10,
    fontStyle: 'italic',
  },
  inputBox: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    textAlignVertical: 'top',
  },
  doneButton: {
    marginTop: 10,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  micButton: {
    marginTop: 20,
    backgroundColor: '#000',
    width: 200,
    height: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  micIcon: {
    color: '#fff',
    fontSize: 24,
  },
  skipButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  wordCard: {
    backgroundColor: '#AEE2FF',
    padding: 20,
    borderRadius: 20,
    elevation: 3,
  },
  word: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  partOfSpeech: {
    fontSize: 14,
    marginBottom: 10,
  },
  translation: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  translationSmall: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 10,
  },
  exampleBlock: {
    marginBottom: 10,
  },
  example2: {
    fontSize: 16,
    fontWeight: '500',
  },
  italic: {
    fontStyle: 'italic',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  categoryButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  exerciseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  exerciseCard: {
    backgroundColor: '#000',
    width: '48%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  exerciseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  matchingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  matchingColumn: {
    width: '48%',
  },
  spanishCard: {
    backgroundColor: '#E6CCFF', // Light purple
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  englishCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spanishText: {
    fontSize: 16,
    textAlign: 'center',
  },
  englishText: {
    fontSize: 16,
    textAlign: 'center',
  },
  grammarContainer: {
    marginTop: 15,
  },
  sentenceLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  sentenceText: {
    fontSize: 16,
    marginBottom: 15,
  },
  verbOption: {
    backgroundColor: '#FF6347', 
    borderRadius: 25,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  verbOptionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default PracticePage;
