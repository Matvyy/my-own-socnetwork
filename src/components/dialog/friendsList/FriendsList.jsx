import React from "react";
import styles from "./FriendsList.module.css"




const FriendsList = (props) => {

    let mapFriendsDateList = props.state.informationAboutDialogs.friendsDateList.map(
        friend => (<div className={styles.friend} key={friend.id}>{friend.name}</div>)
    )

    return(
        <div className={styles.friendsList}>
            <h2>Friends</h2>
                {mapFriendsDateList}

        </div>
    )
}

export default FriendsList