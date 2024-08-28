import React from "react";
import styles from "./Chats.module.css"
import { redirect } from "react-router-dom";




const Chats = (props) => {

   let mapMessageDateList = props.dialogsReducer.messageDateList.map(
       message => (<Message name={message.name} avatar={message.avatar} text={message.text} key={message.id}/>)
   )

   let newMessageElement = React.createRef()

   let newMessage = () =>{
       props.addMessage()
   }

   let onMessageChange = () => {
       let text = newMessageElement.current.value
       props.updateNewTextMessage(text)
   }

   return(
       <div className={styles.chatContainer}>
            <div className={styles.chatWindow}>
                <div className={styles.chatHeader}>
                    <img src="https://www.pngitem.com/pimgs/m/71-716892_woman-avatar-icon-png-transparent-png.png" alt="Alice"/>
                    <div className={styles.friendInfo}>
                        <div className={styles.name}>Elya</div>
                        <div className={styles.status}>Online</div>
                    </div>
                </div>

            <div className={styles.chatWindow}>
                {mapMessageDateList}
            </div>
                <div className={styles.messageInput}>
                    <input onChange={onMessageChange} ref={newMessageElement} placeholder="Type your message..." value={props.dialogsReducer.newMessageText}/>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>
       </div>
   )
}

const Message = (props) =>{
   return(
    //    <div className={styles.message} key={props.id}>
    //        <span className={styles.sender}>{props.name}:</span>
    //        <span>{props.text}</span>
    //    </div>

    
        <div className={styles.message}>
            <img src={props.avatar} alt="Alice"/>
            <div className={styles.messageContent}>
                <span className={styles.sender}>{props.name}</span>
                <span className={styles.text}>{props.text}</span>
            </div>
        </div>


   )
}

export default Chats