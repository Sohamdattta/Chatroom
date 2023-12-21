// IndividualChatScreen.js

import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { firebase } from '@firebase/app';
import '@firebase/firestore';

const IndividualChatScreen = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const { userId } = route.params;

  useEffect(() => {
    const fetchMessages = async () => {
      // Assuming you have a 'messages' collection in Firestore
      const chatRef = firebase.firestore().collection('messages');

      // Query messages for the individual chat with userId
      const query = chatRef
        .where('participants', 'array-contains', userId)
        .orderBy('createdAt', 'desc');

      // Subscribe to real-time updates
      const unsubscribe = query.onSnapshot((querySnapshot) => {
        const messagesData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          _id: doc.id,
        }));
        setMessages(messagesData);
      });

      // Cleanup function to unsubscribe from updates when component unmounts
      return () => {
        unsubscribe();
      };
    };

    fetchMessages();
  }, [userId]);

  const onSend = async (newMessages = []) => {
    // Save the new messages to your database
    const chatRef = firebase.firestore().collection('messages');
    
    // Assuming you have a 'messages' collection in Firestore
    for (const message of newMessages) {
      await chatRef.add({
        ...message,
        participants: [userId, 1], // Add participants to the message
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 1, // replace with the authenticated user's ID
      }}
    />
  );
};

export default IndividualChatScreen;
