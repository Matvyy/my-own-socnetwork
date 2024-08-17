import React from "react";
import styles from "./Chats.module.css"


const Chats = (props) => {

   let mapMessageDateList = props.state.informationAboutDialogs.messageDateList.map(
       message => (<Message name={message.name}  text={message.text} key={message.id}/>)
   )

   return(
       <div className={styles.chatContainer}>
           <div className={styles.chatWindow}>
               {mapMessageDateList}
           </div>

           <Input 
            // newMessageText={props.newMessageText}
            // addMesassge={props.addMessage} 
            // updateNewMessageText={props.updateNewMessageText}
            store={props.store}
            state={props.state}
            />
       </div>
   )
}


const Input = (props) =>{


    let newMessageElement = React.createRef()

    let newMessage = () =>{
        props.store.addMessage()
    }

    let onPostChange = () => {
        let text = newMessageElement.current.value
        props.store.updateNewMessageText(text)
    }



   return(
       <div className={styles.messageInput}>
           <input type="text" onChange={onPostChange} ref={newMessageElement} placeholder="Type your message..." value={props.state.informationAboutDialogs.newMessageText}/>
           <button onClick={newMessage}>Send</button>
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