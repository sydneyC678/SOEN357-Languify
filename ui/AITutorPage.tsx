import React, { useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import ToolBar from './ToolBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useGeminiChat } from '../backend/GeminiChat';

const options = [
  { label: 'Practice grammar 📖' },
  { label: 'Learn new vocabulary 📝' },
  { label: 'Improve pronunciation 🎙️' },
  { label: 'Ask a question ❓' },
  { label: 'Have a casual conversation 💬' },
];

type Message = {
  text: string;
  user: boolean;
};

const AITutorPage = () => {
  const {
    messages,
    userInput,
    setUserInput,
    sendMessage,
    stopSpeech,
    clearMessages,
    loading,
    isSpeaking,
    currentStage,
    resetToInitial
  } = useGeminiChat();
  
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const handleOptionPress = (option: string) => {
    sendMessage(option);
  };

  const handleSend = () => {
    if (userInput.trim()) {
      sendMessage();
    }
  };

  // Function to check if options should be displayed
  const shouldShowOptions = () => {
    return currentStage === "initial";
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <ScrollView 
            ref={scrollViewRef}
            style={styles.messagesContainer}
            contentContainerStyle={styles.messagesContent}
          >
            {(messages as Message[]).map((msg, index) => (
              <View
                key={index}
                style={[styles.messageBubble, msg.user ? styles.userBubble : styles.aiBubble]}
              >
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
            ))}
          </ScrollView>

          {shouldShowOptions() && (
            <View style={styles.optionsContainer}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionButton}
                  onPress={() => handleOptionPress(option.label)}
                >
                  <Text style={styles.optionText}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View style={styles.chatBoxContainer}>
            <TextInput
              style={styles.chatInput}
              placeholder="Type a message..."
              value={userInput}
              onChangeText={setUserInput}
              onSubmitEditing={handleSend}
            />
            {isSpeaking && (
              <TouchableOpacity style={styles.micButton} onPress={stopSpeech}>
                <Icon name="stop" size={24} color="#000" />
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
          
          {currentStage !== "initial" && (
            <TouchableOpacity style={styles.resetButton} onPress={resetToInitial}>
              <Text style={styles.resetButtonText}>Start Over</Text>
            </TouchableOpacity>
          )}

          <ToolBar />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#F3EAFF',
    justifyContent: 'space-between'
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 10,
  },
  messagesContent: {
    paddingBottom: 20,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 20,
    marginVertical: 4,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#D1C4E9',
    alignSelf: 'flex-end',
  },
  aiBubble: {
    backgroundColor: '#E8EAF6',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  optionsContainer: {
    marginBottom: 10,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 6,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  chatBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 30,
    padding: 10,
    marginBottom: 20, // Adjusted marginBottom here to avoid overlapping with the keyboard
  },
  chatInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize: 16,
  },
  micButton: {
    marginLeft: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  sendButton: {
    backgroundColor: '#9747FF',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#FF6B6B',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  }
});

export default AITutorPage;
