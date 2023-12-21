// SignUpScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import {auth} from '../firebaseconfig'
import {  createUserWithEmailAndPassword} from "firebase/auth";
const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth,  email, password);

      // Navigate to the SignIn screen after successful signup
      navigation.navigate('SignIn');
    } catch (error) {
      console.error(error.message);
    }
  };

  const goToSignIn = () => {
    // Navigate to the SignIn screen
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Sign Up" onPress={signUp} />
      <Text style={styles.signInLink} onPress={goToSignIn}>
        Already have an account? Sign In
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  signInLink: {
    marginTop: 10,
    color: 'blue',
  },
});

export default SignUpScreen;
