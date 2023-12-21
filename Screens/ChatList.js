// ChatsListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useUser } from '../usercontext';



const ChatsListScreen = ({ navigation, route }) => {

  
    const data = [
      { id: '1', name: 'User 1', type: 'individual' },
      { id: '2', name: 'User 2',  type: 'individual' },
      { id: '3', name: 'Group Chat', type: 'group' },
    ];
  
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => navigation.navigate(item.type === 'individual' ? 'IndividualChat' : 'GroupChat', { userId: item.id })}
      >
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    chatItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    chatName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    lastMessage: {
      fontSize: 14,
      color: '#888',
    },
    username: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
  });
  
  export default ChatsListScreen;
  
