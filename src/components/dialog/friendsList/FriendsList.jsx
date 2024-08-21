import React from "react";
import styles from "./FriendsList.module.css"




const FriendsList = (props) => {

    let mapFriendsDateList = props.state.friendsDateList.map(
        friend => (<Friend className={styles.friend} key={friend.id} avatar={friend.avatar} status={friend.status} name={friend.name}></Friend>)
    )

    return(
        <div className={styles.friendsList}>
            <h2>Friends</h2>
                {mapFriendsDateList}

        </div>
    )
}

export default FriendsList


const Friend = (props) => {
    return(
        <div className={styles.friendsList}>

            <div className={styles.friend}>
                <img src={props.avatar} alt={props.name}/>
                {props.name}

                {props.status == true ? <span className={styles.status}>online</span> : <span className={styles.statusOffline}>offline</span>}

            </div>

        </div>
    )
}