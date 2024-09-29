import React from "react";
import styles from "./Chats.module.css"
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/formsControls/FormsControl";
import { maxLengthCreator, required } from "../../../utils/validatores";



const Chats = (props) => {

   let mapMessageDateList = props.dialogsReducer.messageDateList.map(
       message => (<Message name={message.name} avatar={message.avatar} text={message.text} key={message.id}/>)
   )

   let newMessage = (values) =>{
       props.addMessage(values.newMessageText)
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
                <AddMessageFormRedux 
                onSubmit={newMessage} />
            </div>
       </div>
   )
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.messageInput}>
                <Field
                    placeholder="Type your message..."
                    component={Input}
                    name="newMessageText"
                    validate={[required, maxLength100]}
                />
                <button type="submit">Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

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