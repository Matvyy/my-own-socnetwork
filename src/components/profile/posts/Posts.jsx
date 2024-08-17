import React from "react";
import styles from "./Posts.module.css"

// let postsInformationList = [
//     {name: "name", text: "first post", avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", id: 1},
//     {name: "name", text: "second post", avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", id: 2},
//     {name: "name", text: "third post", avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", id: 3},
// ]

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

    let mapPostsInformationList = props.postsInformationList.map(
        info => (<Post name={info.name} avatar={info.avatar} text={info.text} key={info.id}/>)
    )

    return(
        <div className={styles.posts}>
            <div className={styles.newPost}>
                <label> Create new post</label>
                <br />
                <textarea></textarea>
                <br />
                <button>post</button>
            </div>
            
            {mapPostsInformationList}


        </div>
    )
}


export default Posts