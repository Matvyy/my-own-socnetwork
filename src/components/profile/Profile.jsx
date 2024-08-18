import React from "react";
import styles from "./Profile.module.css"
import PostContainer from "./posts/PostContainer";



const Profile =(props)=>{


    return(
        <div className={styles.profile}>
            
            <div className={styles.avatar}>
                <img src={props.state.infoAboutMe.avatar} alt="avatar"/>
            </div>

            <div className={styles.infomationAboutPerson}>
                <div className={styles.name}>
                    {props.state.infoAboutMe.name}
                </div>

            
                <div className={styles.description}>
                    {props.state.infoAboutMe.description}
                </div>
            </div>

            <div className={styles.posts}>
                Posts 
                <hr />
                <PostContainer 
                store={props.store}
                state={props.state} 
                />
            </div>
        </div>
    )
}

export default Profile