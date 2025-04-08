import { useState, useEffect } from "react";
import * as GoogleGenerativeAI from "@google/generative-ai";
import * as Speech from "expo-speech";
import Constants from 'expo-constants';

const GEMINI_API = Constants.expoConfig?.extra?.GEMINI_API;
export const useGeminiChat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentStage, setCurrentStage] = useState("initial");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(GEMINI_API);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  useEffect(() => {
    const initialMessage = { 
      text: "Hey There, Welcome to Language Tutor! Please select one of the options below to get started.", 
      user: false 
    };
    setMessages([initialMessage]);
  }, []);

  const sendMessage = async (input) => {
    try {
      setLoading(true);
      const messageText = input || userInput;
      if (!messageText.trim()) return;

      const userMessage = { text: messageText, user: true };
      setMessages((prev) => [...prev, userMessage]);
      
      let aiResponse;

      if (currentStage === "initial" && (
          messageText.includes("Practice grammar") || 
          messageText.includes("Learn new vocabulary") || 
          messageText.includes("Improve pronunciation") || 
          messageText.includes("Ask a question") || 
          messageText.includes("Have a casual conversation"))) {
        
        setSelectedOption(messageText);
        setCurrentStage("language-selection");
        aiResponse = "What language would you like to learn?";
      }
    
      else if (currentStage === "language-selection") {
        setSelectedLanguage(messageText);
        setCurrentStage("questions");
        setQuestionCount(1);
        
        const prompt = `You are a language tutor helping someone learn ${messageText}. 
        They want to ${selectedOption}. Generate the first practice question for them.
        For grammar: Focus on verb conjugations, tenses, sentence structure.
        For vocabulary: Focus on common words, phrases, translations.
        For pronunciation: Describe sounds and provide examples of words to practice.
        For questions: Answer their specific language learning questions.
        For conversation: Engage in simple dialog in ${messageText} with translations.
        
        This is question 1 of 5.`;

        const result = await model.generateContent(prompt);
        aiResponse = result.response.text();
        setCurrentQuestion(aiResponse);
      }

      else if (currentStage === "questions" && questionCount < 5) {
        const prompt = `You are a language tutor helping someone learn ${selectedLanguage}. 
        They want to ${selectedOption}. 
        The current question was: ${currentQuestion}
        Their answer is: ${messageText}
        
        First provide brief feedback on their answer. Then generate the next practice question.
        This is question ${questionCount + 1} of 5.`;
        
        const result = await model.generateContent(prompt);
        aiResponse = result.response.text();
        setCurrentQuestion(aiResponse);
        setQuestionCount(questionCount + 1);
      }
      else if (currentStage === "questions" && questionCount === 5) {
        const prompt = `You are a language tutor helping someone learn ${selectedLanguage}. 
        They want to ${selectedOption}. 
        The current question was: ${currentQuestion}
        Their answer is: ${messageText}
        
        First provide brief feedback on their answer. Then congratulate them for completing all 5 questions
        and ask if they would like to try another activity or language.`;
        
        const result = await model.generateContent(prompt);
        aiResponse = result.response.text();
        setCurrentStage("completed"); 
      }
      else if (currentStage === "completed" && 
              (messageText.toLowerCase().includes("yes") || 
               messageText.toLowerCase().includes("another") ||
               messageText.toLowerCase().includes("new") ||
               messageText.toLowerCase().includes("different"))) {

        setCurrentStage("initial");
        setQuestionCount(0);
        setSelectedOption(null);
        setSelectedLanguage(null);
        setCurrentQuestion(null);
        
        aiResponse = "Great! Please select one of the options to get started again.";
      }

      else {
        let contextPrompt = "You are a helpful language learning assistant.";
        
        if (selectedLanguage && selectedOption) {
          contextPrompt = `You are a language tutor helping someone learn ${selectedLanguage}. 
          They selected ${selectedOption}. 
          They said: ${messageText}
          
          Respond helpfully based on their message.`;
        }
        
        const result = await model.generateContent(contextPrompt + "\n\n" + messageText);
        aiResponse = result.response.text();
      }

      const aiMessage = { text: aiResponse, user: false };
      setMessages((prev) => [...prev, aiMessage]);
      
      if (aiResponse && !isSpeaking) {
        Speech.speak(aiResponse, {
          onDone: () => setIsSpeaking(false),
        });
        setIsSpeaking(true);
      }
      
      setUserInput("");
    } catch (err) {
      console.error("Error generating message:", err);
      const errorMessage = { 
        text: "Sorry, I encountered an error. Please try again.", 
        user: false 
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const stopSpeech = () => {
    Speech.stop();
    setIsSpeaking(false);
  };

  const clearMessages = () => {
    setMessages([]);
    setIsSpeaking(false);
    setCurrentStage("initial");
    setSelectedOption(null);
    setSelectedLanguage(null);
    setQuestionCount(0);
    setCurrentQuestion(null);
    
    const initialMessage = { 
      text: "Welcome to Language Tutor! Please select one of the options below to get started.", 
      user: false 
    };
    setMessages([initialMessage]);
  };

  const resetToInitial = () => {
    setCurrentStage("initial");
    setQuestionCount(0);
    setSelectedOption(null);
    setSelectedLanguage(null);
    setCurrentQuestion(null);
    
    const resetMessage = { 
      text: "Let's start over. Please select one of the options below.", 
      user: false 
    };
    setMessages((prev) => [...prev, resetMessage]);
  };

  return {
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
  };
};