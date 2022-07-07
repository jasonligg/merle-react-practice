import { useState, useEffect } from "react";
import MessageItem from "./MessageItem";
import MessageCreateForm from "./MessageCreateForm";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch("http://localhost:3001/api/messages");
      const data = await res.json();

      setMessages(data);
    };
    getMessages();
  }, []);

  return (
    <div>
       <MessageCreateForm/>
      <br />
      {messages.map((message, idx) => (
        <MessageItem key={idx} message={message} />
      ))}
     
    </div>
  );
};

export default MessageList;
