import React from "react";
// import styles from "./Profile.module.css"
import styles from "./Dialog.module.css"



let friendsDateList = [
    {name: "Elya", id: 1},
    {name: "Jienia", id: 2},
    {name: "George", id: 3},
    {name: "Vladus", id: 4},

]


let messageDateList = [
    {name: "Elya", text: "Hi, how are u?", id: 1},
    {name: "You", text: "Hi, i am fine, and u?", id: 2},
    {name: "Elya", text: "i am too?", id: 3},
    {name: "You", text: "That is cool", id: 4},
]


const Dialog =()=>{
    return(
        <div className={styles.dialog}>
            <div className={styles.container}>
                <FriendsList/>

                <Chats/>
            </div>
        </div>


    )
}

export default Dialog

const FriendsList = (props) => {

    let mapFriendsDateList = friendsDateList.map(
        friend => (<div className={styles.friend} key={friend.id}>{friend.name}</div>)
    )

    return(
        <div className={styles.friendsList}>
            <h2>Friends</h2>
                {mapFriendsDateList}

        </div>
    )
}

const Chats = (props) => {

    let mapMessageDateList = messageDateList.map(
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

