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

const { width } = Dimensions.get('window');

const PracticePage = () => {
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
    if (pageIndex < 3) scrollToIndex(pageIndex + 1);
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
            style={[styles.inputBox, styles.largeGrayInput]}
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
    backgroundColor: 'dark orange',
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
    borderColor: '#000', // change to black for visibility
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    alignSelf: 'center', // center it
    borderRadius: 10, // optional: make it look nice
  },

  skipButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  }

});

export default PracticePage;
