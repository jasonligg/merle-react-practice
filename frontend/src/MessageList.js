import { useState, useEffect, useCallback } from "react";
import MessageItem from "./MessageItem";
import MessageCreateForm from "./MessageCreateForm";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  const getMessages = useCallback( async () => {
    const res = await fetch("http://localhost:3001/api/messages");
    const data = await res.json();
    setMessages(data);
  }, [])

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <div>
       <MessageCreateForm fetchMessages={getMessages}/>
      <br />
      <button onClick={getMessages}>Refresh Messages</button>
      {messages.map((message, idx) => (
        <MessageItem key={idx} message={message} />
      ))}
     
    </div>
  );
};

export default MessageList;
