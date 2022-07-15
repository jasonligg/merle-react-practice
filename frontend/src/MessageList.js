import { useState, useEffect, useCallback } from "react";
import MessageItem from "./MessageItem";
import MessageCreateForm from "./MessageCreateForm";

const MessageList = () => {
  const [allMessages, setAllMessages] = useState([]);

  // set up state vr for page tracking 
  const [page, setPage] = useState(0); 

  // state for limit 
  const [limit, setLimit] = useState(10); 

  const totalPages = Math.ceil(allMessages.length / limit)

  const pageButtons = []

  for (let i = 0; i < totalPages; i++){
      pageButtons.push(i)
  }
 
  //offset 
  const starting = limit * page; 

  const ending = starting + limit;

  let messageItems = allMessages.slice(starting, ending)

  // gets all messages when called 
  const getAllMessages = useCallback( async () => {
    const res = await fetch("http://localhost:3001/api/messages");
    const data = await res.json();
    setAllMessages(data);
  }, [])

  // pagination we can know how many pages of things there will be 
  // by dividing the total num of messages by the limit 
  // offset will be limit * (page - 1)


  useEffect(() => {
    getAllMessages();
  }, [getAllMessages]);

  // UI components for paginations: buttons to toggle limit drop down 
  // Page buttons down bottom of page one button per page. 


  return (
    <div>
      <label> Messages per page:</label>
      <select value={limit} onChange={(e)=> setLimit(e.target.value)}> 
        <option value={10}>10</option>
        <option value={45}>45</option>
        <option value={100}>100</option>
      </select>
       <MessageCreateForm fetchMessages={getAllMessages}/>
      <br />
      <button onClick={getAllMessages}>Refresh Messages</button>
      
      {pageButtons.map((page, idx)=> (
        <button key={idx} onClick={()=> setPage(page) }>{page}</button> 
      ))}
      {messageItems.map((message, idx) => (
        <MessageItem key={idx} message={message} />
      ))}
     
    </div>
  );
};

export default MessageList;
