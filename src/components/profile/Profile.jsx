import React from "react";
import styles from "./Profile.module.css"
import Posts from "./posts/Posts";

let infoOfMe = {
    name: "name",
    avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
    description: "description"
}

const Profile =(props)=>{
    return(
        <div className={styles.profile}>
            
            <div className={styles.avatar}>
                <img src={infoOfMe.avatar}/>
            </div>

            <div className={styles.infomationAboutPerson}>
                <div className={styles.name}>
                    {infoOfMe.name}
                </div>

            
                <div className={styles.description}>
                    {infoOfMe.description}
                </div>
            </div>

            <div className={styles.posts}>
                Posts 
                <hr />
                <Posts/>
            </div>
        </div>
    )
}

export default Profile