import React, {useState} from "react"; 


const MessageCreateForm = (props) => {
    const {fetchMessages} = props;
    // username/ alias and message aka text
const [formInput, setFormInput] = useState({alias: '', text: ''})

const [isPosting, setIsPosting] = useState(false)

// want to eval if form input is a valid input aka not empty and both need t obe vaild inputs
const handleSubmit = (e) => {
    e.preventDefault()
    if (isPosting) return
    // check if formInput.alias and text exsist 
    if (formInput.alias !== "" && formInput.text !== "" ){ 
         // handle sending our stately information to our api via fetch 
        setIsPosting(true);
        fetch("http://localhost:3001/api/messages", {
        // method 
        method: "POST",
        // headers
        headers: {
            "Content-Type": "application/json"
        }, 
        // body 
        body: JSON.stringify(formInput)
        }).then(()=> {
            fetchMessages();
            setIsPosting(false);
        })
       
        setFormInput({alias: "", text: ""})
      
} else {
    alert("please provide valid inputs to form!")
}

}

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="alias">Username</label>
            <input type="text" name="alias" id="alias" value={formInput.alias} onChange={(e)=> setFormInput({...formInput, alias: e.target.value}) }/>

            <label htmlFor="text">Message</label>
            <input type="text" name="text" id="text"  value={formInput.text} onChange={(e)=>  setFormInput({...formInput, text: e.target.value})}/> 

            {!isPosting && (<button type="submit" >Submit</button> )}
        </form>
    )
}

export default MessageCreateForm