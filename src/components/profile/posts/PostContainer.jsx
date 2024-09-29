//import React from "react";
import { addPostActionCreator } from "../../../redux/profileReducer";
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
        addPost: (newPostText)=>{
            dispatch(addPostActionCreator(newPostText))
        },

    }
}

let PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostContainer