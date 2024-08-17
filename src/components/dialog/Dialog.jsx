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
                dispatch={props.dispatch}
                state={props.state}
                />

                <Chats 
                dispatch={props.dispatch}
                state={props.state}
                />
            </div>
        </div>


    )
}

export default Dialog



