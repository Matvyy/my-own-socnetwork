import React from "react";
import styles from "./PersonInformation.module.css"
import user_avatar from "./../../../assets/images/user_avatar.png"

let PersonInformation = (props) =>{
    return(
        <div className={styles.header}>
            <img src={props.profile.photos.large ?? user_avatar } alt="Profile Picture" className={styles.profilePic}/>
            <div className={styles.profileInfo}>
                <h1 className={styles.name}>{props.profile.fullName}</h1>
                <p className={styles.bio}>{props.profile.aboutMe}</p>
                {/* <div className={styles.stats}>
                    <div><strong>120</strong> Posts</div>
                    <div><strong>300</strong> Followers</div>
                    <div><strong>180</strong> Following</div>
                </div> */}
            </div>
        </div>
    )
}

export default PersonInformation