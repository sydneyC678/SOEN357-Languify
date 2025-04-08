import React, { useState } from 'react';
import {
    View, 
    Text, 
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

interface SignUpPageProps {
    navigation: StackNavigationProp<RootStackParamList, 'SignUp'>;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ navigation }) => {
    const [username, setUsername] = useState('');

    const handleSignUp = () => {
        navigation.navigate('Home', { username });
    };


    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcome}>Welcome to Languify</Text>
            <Text style={styles.loginLabel}>Sign up</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
            />

            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
                <Text style={styles.loginButtonText}>Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
                Already have an account?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.signupText}>Log in</Text>
                </TouchableOpacity>
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 30,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    welcome: {
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center',
      marginBottom: 20,
    },
    loginLabel: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 10,
    },
    input: {
      height: 50,
      backgroundColor: '#f0f0f0',
      borderRadius: 12,
      paddingHorizontal: 16,
      marginBottom: 16,
      fontSize: 16,
    },
    loginButton: {
      backgroundColor: '#000',
      height: 48,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 16,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    footerText: {
      textAlign: 'center',
      fontSize: 14,
      color: '#000',
    },
    signupText: {
      fontWeight: 'bold',
    },
  });
  
export default SignUpPage;