import React from "react";
import styles from "./Chats.module.css"
import { addMessageActionCreater, updateNewMessageTextActionCreator } from "../../../redux/dialogsReducer";


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
            dispatch={props.dispatch}
            state={props.state}
            />
       </div>
   )
}



const Input = (props) =>{


    let newMessageElement = React.createRef()

    let newMessage = () =>{
        let action = addMessageActionCreater()
        props.dispatch(action)
    }

    let onPostChange = () => {
        let text = newMessageElement.current.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
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