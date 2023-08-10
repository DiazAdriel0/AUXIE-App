import React, { useState, useEffect } from "react";
import { db, auth } from "../../config/firebase-config";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import "./Chat.css";

export const Chat = ({ recipient }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const conversationsRef = collection(db, "conversations"); // Change: Use 'conversations' collection
  const participants = [auth.currentUser.uid, recipient];
  participants.sort(); // Sort for consistent order
  const conversationId = participants.join("_");
console.log(conversationId)
  const conversationData = { participants };

  useEffect(() => {
    // Fetch or create a conversation document
    const getOrCreateConversation = async () => {
      
      await addDoc(conversationsRef, conversationData); // Create the conversation if it doesn't exist

      // Fetch messages for the conversation
      const messagesRef = collection(db, `conversations/${conversationId}/messages`);
      const queryMessages = query(messagesRef, orderBy("createdAt"));
      const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
        let messages = [];
        snapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });

      return () => unsubscribe();
    };

    getOrCreateConversation();
  }, [recipient]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;

    // Fetch or create a conversation document
    const participants = [auth.currentUser.uid, recipient];
    participants.sort(); // Sort for consistent order
    const conversationId = participants.join("_");
    const conversationData = { participants };
    await addDoc(conversationsRef, conversationData); // Create the conversation if it doesn't exist

    // Store the message with the conversation ID
    const messagesRef = collection(db, `conversations/${conversationId}/messages`);
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      sender: auth.currentUser.uid,
      recipient: recipient,
    });

    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div className="header">
        <h1>Conversation with User: {recipient}</h1>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="user">{message.sender === auth.currentUser.uid ? "You" : `User ${recipient}`}:</span> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="new-message-input"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};
