import { useState } from "react";

const MessageCreateForm = () => {
  const [alias, setAlias] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // if (alias.length === 0 || text.length === 0) {
    //   alert('Alias and text cannot be empty');
    //   return;
    // }

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({alias, text})
    }

    fetch('http://localhost:3001/api/messages', config)
      .then((res) => {
        if (res.ok) {
          setAlias('');
          setText('');
         }
       });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        alias:
        <input type="text" required onChange={(e) => setAlias(e.target.value)} value={ alias }/>
      </label>
      <br />
      <label>
        text:
        <input type="text" required onChange={(e) => setText(e.target.value)} value={text}/>
      </label>
    <input type="submit" value="Submit" />
      </form>
  )

 
 };

export default MessageCreateForm;