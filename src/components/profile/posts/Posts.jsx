import React from "react";
import styles from "./Posts.module.css"
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validatores";
import { Textarea } from "../../common/formsControls/FormsControl";


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

let maxLength10 = maxLengthCreator(10)

const Posts = (props) =>{

    let mapPostsInformationList = props.posts.map(
        info => (<Post name={info.name} avatar={info.avatar} text={info.text} key={info.id}/>)
    )

    let newPost = (values) => {
        props.addPost(values.newPostText)

    }
    


    return(
        <div className={styles.posts}>
            <h2>Posts</h2>
            
            <div className={styles.newPost}>
                <PostsReduxForm newPost={newPost} onSubmit={newPost} />
            </div>
            

            <div className={styles.posts}>
                {mapPostsInformationList}
            </div>

        

        </div>
    )
}

const PostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
                <label> Create new post</label>
                <br />
                <Field 
                component={Textarea}
                validate={[required, maxLength10]}
                name="newPostText"
                />
                <br />
                <button type="submit">post</button>
    </form>
}

const PostsReduxForm = reduxForm({form: 'addPost'})(PostsForm)

export default Posts