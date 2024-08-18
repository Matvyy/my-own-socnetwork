import React from "react";
import styles from "./Input.module.css"

const Input = (props) =>{

    let newMessageElement = React.createRef()

    let newMessage = () =>{
        props.addMessage()
    }

    let onPostChange = () => {
        let text = newMessageElement.current.value
        props.updateNewTextMessage(text)
    }

   return(
       <div className={styles.messageInput}>
           <input type="text" onChange={onPostChange} ref={newMessageElement} placeholder="Type your message..." value={props.newMessageText}/>
           <button onClick={newMessage}>Send</button>
       </div>
   )
}
export default Input