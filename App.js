// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useUser, UserProvider } from './usercontext';
import ChatsListScreen from './Screens/ChatList';
import IndividualChatScreen from './Screens/IndividualChatscreen';
import SignInScreen from './Screens/Signin';
import SignUpScreen from './Screens/Signup';
// import { onAuthStateChanged,auth } from 'firebase/auth';
import { auth } from './firebaseconfig';
import GroupChatScreen from './Screens/Groupchat';

const Stack = createStackNavigator();

const App = () => {
  // const { setUser } = useUser();

  // useEffect(() => {
  //   // Your authentication logic to check and set the user
  //   // Example using Firebase Auth
  //   const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
  //     if (userAuth) {
  //       // User is signed in.
  //       setUser(userAuth); // Set the user in your context
  //     } else {
  //       // User is signed out.
  //       setUser(null); // Set user to null or perform any other actions
  //     }
  //   });

  //   return () => {
  //     // Cleanup the subscription when the component unmounts
  //     unsubscribe();
  //   };
  // }, [setUser]);

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignUp'>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ChatsList" component={ChatsListScreen} />
          <Stack.Screen name="IndividualChat" component={IndividualChatScreen} />
          <Stack.Screen name="GroupChat" component={GroupChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
