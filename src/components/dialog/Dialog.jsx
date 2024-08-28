import React from "react";
import styles from "./Dialog.module.css"
import FriendsList from "./friendsList/FriendsList";
import ChatsContainer from "./chats/ChatsContainer";


const Dialog =(props)=>{

    return(
        <div className={styles.dialog}>
            <div className={styles.container}>
                <FriendsList 
                state={props.state}
                />
                <ChatsContainer/>

            </div>
        </div>


    )
}

export default Dialog



