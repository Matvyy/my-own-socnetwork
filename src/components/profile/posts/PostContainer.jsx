import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import Posts from "./Posts";

const PostContainer = (props) =>{

    let newPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action)

    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return(
        <Posts addPost={newPost} updateNewPostText={onPostChange} posts={props.state.postsInformationList} newPostText={props.state.newPostText}/>
    )
}


export default PostContainer