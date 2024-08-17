import React from "react";
import styles from "./Chats.module.css"

const Chats = (props) => {

   let mapMessageDateList = props.messageDateList.map(
       message => (<Message name={message.name}  text={message.text} key={message.id}/>)
   )

   return(
       <div className={styles.chatContainer}>
           <div className={styles.chatWindow}>
               {mapMessageDateList}
           </div>

           <Input/>
       </div>
   )
}

const Input = () =>{
   return(
       <div className={styles.messageInput}>
           <input type="text" placeholder="Type your message..."/>
           <button>Send</button>
       </div>
   )
}

const Message = (props) =>{
   return(
       <div className={styles.message} key={props.id}>
           <span className={styles.sender}>{props.name}:</span>
           <span>{props.text}</span>
       </div>
   )
}

export default Chats