import React from "react";
import styles from "./Profile.module.css"
import PostContainer from "./posts/PostContainer";
import PersonInformation from "./personInformation/PersonInformation";
import Preloader from "../common/preloader/Preloader";


const Profile =(props)=>{

    if(!props.profile){
        return <Preloader/>
    }

    return(
        <div className={styles.profileBody}>
            <div className={styles.profileContainer}>
                
                <PersonInformation profile={props.profile}/>

                <div className={styles.content}>
                    <PostContainer />
                </div>
            </div>
        </div>
    )
}

export default Profile