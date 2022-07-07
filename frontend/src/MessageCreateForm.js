import React, {useState} from "react"

const MessageCreateForm = () => {
    // set up state hook to hold username val 
    const [alias, setAlias] = useState(""); 
    // set up state hook for message 
    const [text, setText] = useState("")

    // handleSubmit func: send alias and messageBody to our api 
    const handleSubmit = (event) => {
        event.preventDefault()
         fetch("http://localhost:3001/api/messages", {
            //method 
            method: "POST",
            //headers 
            headers: {
                'Content-Type': 'application/json'
            },
            // body
            body: JSON.stringify({alias, text})
        })
    }

    return (
            <form onSubmit={handleSubmit} >
                <label htmlFor="alias">User Name</label>
                {/* set onChange for input feilds to set state*/ } 
                <input type="text" id="alias" name="alias" value={alias} onChange={(event)=> setAlias(event.target.value) }/>

                <label htmlFor="text">Message</label> 
                <input type="text" id="text" name="text" value={text} onChange={(event)=> setText(event.target.value)}/>

                <button type="sumbit">Submit</button> 
            </form> 
    )
}

export default MessageCreateForm