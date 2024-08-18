import React from "react";
import styles from "./Chats.module.css"
import InputContainer from "./input/InputContainer";



const Chats = (props) => {

   let mapMessageDateList = props.state.messageDateList.map(
       message => (<Message name={message.name}  text={message.text} key={message.id}/>)
   )

   return(
       <div className={styles.chatContainer}>
           <div className={styles.chatWindow}>
               {mapMessageDateList}
           </div>

            <InputContainer             
            state={props.state}
            store={props.store}
            />
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