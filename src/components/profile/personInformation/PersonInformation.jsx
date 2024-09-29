import React from "react";
import styles from "./PersonInformation.module.css"
import user_avatar from "./../../../assets/images/user_avatar.png"
import ProfileStatus from "./profileStatus/ProfileStatus";

let PersonInformation = (props) =>{
    return(
        <div className={styles.header}>
            <img src={props.profile.photos.large ?? user_avatar } alt="Profile Picture" className={styles.profilePic}/>
            <div className={styles.profileInfo}>
                <h1 className={styles.name}>{props.profile.fullName}</h1>
                <div className={styles.bio}><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
                
            </div>
        </div>
    )
}

export default PersonInformation