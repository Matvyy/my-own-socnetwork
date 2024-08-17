import React from "react";
import styles from "./Profile.module.css"
import Posts from "./posts/Posts";



const Profile =(props)=>{

    return(
        <div className={styles.profile}>
            
            <div className={styles.avatar}>
                <img src={props.state.informationAboutProfile.infoAboutMe.avatar} alt="avatar"/>
            </div>

            <div className={styles.infomationAboutPerson}>
                <div className={styles.name}>
                    {props.state.informationAboutProfile.infoAboutMe.name}
                </div>

            
                <div className={styles.description}>
                    {props.state.informationAboutProfile.infoAboutMe.description}
                </div>
            </div>

            <div className={styles.posts}>
                Posts 
                <hr />
                <Posts 
                dispatch={props.dispatch}
                state={props.state} 
                />
            </div>
        </div>
    )
}

export default Profile