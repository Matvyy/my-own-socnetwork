import React from "react";
import { addMessageActionCreater, updateNewMessageTextActionCreator } from "../../../../redux/dialogsReducer";
import Input from "./Input";

const InputContainer = (props) =>{

    let newMessage = () =>{
        let action = addMessageActionCreater()
        props.store.dispatch(action)
    }

    let onPostChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

   return(
       <div>
            <Input newMessageText={props.state.newMessageText} addMessage={newMessage} updateNewTextMessage={onPostChange}/>
       </div>
   )
}
export default InputContainer