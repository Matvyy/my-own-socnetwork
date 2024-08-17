import React from "react";
import styles from "./Profile.module.css"
import Posts from "./posts/Posts";



const Profile =(props)=>{
    return(
        <div className={styles.profile}>
            
            <div className={styles.avatar}>
                <img src={props.infoAboutMe.avatar} alt="avatar"/>
            </div>

            <div className={styles.infomationAboutPerson}>
                <div className={styles.name}>
                    {props.infoAboutMe.name}
                </div>

            
                <div className={styles.description}>
                    {props.infoAboutMe.description}
                </div>
            </div>

            <div className={styles.posts}>
                Posts 
                <hr />
                <Posts postsInformationList={props.postsInformationList}/>
            </div>
        </div>
    )
}

export default Profile