import React from "react";
import styles from "./Posts.module.css"


let Post = (props) =>{
    return(
        <div className={styles.bodyPost}>
            <div className={styles.post}>
                <img src={props.avatar} alt="Avatar" className={styles.avatar}/>
                <div className={styles.postContent}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.text}>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Posts = (props) =>{

    let mapPostsInformationList = props.state.informationAboutProfile.postsInformationList.map(
        info => (<Post name={info.name} avatar={info.avatar} text={info.text} key={info.id}/>)
    )

    let newPostElement = React.createRef()

    let newPost = () => {

        props.store.addPost()

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.store.updateNewPostText(text)
    }

    return(
        <div className={styles.posts}>
            <div className={styles.newPost}>
                <label> Create new post</label>
                <br />
                <textarea onChange={onPostChange} ref={newPostElement} value={props.state.informationAboutProfile.newPostText}></textarea>
                <br />
                <button onClick={newPost}>post</button>
            </div>
            
            {mapPostsInformationList}


        </div>
    )
}


export default Posts