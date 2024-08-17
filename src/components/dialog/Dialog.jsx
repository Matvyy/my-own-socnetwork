import React from "react";
// import styles from "./Profile.module.css"
import styles from "./Dialog.module.css"
import Chats from "./chats/Chats";
import FriendsList from "./friendsList/FriendsList";


const Dialog =(props)=>{

    return(
        <div className={styles.dialog}>
            <div className={styles.container}>
                <FriendsList 
                // friendsDateList={props.friendsDateList}
                store={props.store}
                state={props.state}
                />

                <Chats 
                // messageDateList={props.messageDateList} 
                // newMessageText={props.newMessageText} 
                // addMessage={props.addMessage} 
                // updateNewMessageText={props.updateNewMessageText}
                state={props.state}
                store={props.store}
                />
            </div>
        </div>


    )
}

export default Dialog



