import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const GroupChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    const fetchMessages = async () => {
      setMessages(messagesFromDatabase);
    };

    fetchMessages();
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1, 
      }}
    />
  );
};

export default GroupChatScreen;
