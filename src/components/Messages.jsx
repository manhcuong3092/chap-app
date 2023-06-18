import React from "react";
import Message from "./Message";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { useState } from "react";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Messages = () => {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    try {
      const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });
      console.log(messages);
      return () => {
        unsub();
      };
    } catch (error) {
      console.log(error);
    }
  }, [data.chatId]);
  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
