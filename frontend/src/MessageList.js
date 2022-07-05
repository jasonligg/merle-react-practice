import { useState, useEffect } from 'react';
import MessageItem from './MessageItem';
import MessageCreateForm from './MessageCreateForm';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  // const messageItems = [];

  useEffect(() => {
    // fetch('http://localhost:3001/api/messages')
    //   .then((res) => res.json())
    //   .then((data) => setMessages(data));

    async function getMessages() {
      const res = await fetch('http://localhost:3001/api/messages');
      const data = await res.json();
     
      setMessages(data);
     }
    
    getMessages();

  }, []);

  // for (let i = 0; i < messages.length; i += 1) {
  //   const message = messages[i];
  //   messageItems.push(<MessageItem key={`messageItem-${i}`} message={ message } />)
  // }

  const messageItems = messages.map((message, idx) => <MessageItem key={idx} message={message} />);
    
  
  return (
    <div>
      <MessageCreateForm />
      <br />
      {messageItems}
    </div>
  )
};

export default MessageList;