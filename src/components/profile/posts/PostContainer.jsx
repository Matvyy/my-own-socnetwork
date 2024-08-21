//import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import Posts from "./Posts";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return{
        posts: state.profileReducer.postsInformationList,
        newPostText: state.profileReducer.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text)=>{
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

let PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostContainer