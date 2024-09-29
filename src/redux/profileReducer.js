import { profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"

const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

let initialState = {
    postsInformationList: [
        {name: "name", text: "first post", avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg", id: 1},
        {name: "name", text: "second post", avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg", id: 2},
        {name: "name", text: "third post", avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg", id: 3},
    ],
    
    infoAboutMe: {
        name: "name",
        avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
        description: "description"
    },
    newPostText: "",
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:{
            let nameOfPostAdder = state.infoAboutMe.name
            let newPost = {
                id: 5,
                text: action.newPostText,
                name: nameOfPostAdder,
                avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
            }

            return {
                ...state,
                postsInformationList: [...state.postsInformationList, newPost],
                newPostText: ""
            }
            
        }


        case SET_USER_PROFILE:{

            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS:{

            return {
                ...state,
                status: action.status
            }
        }
        default: 
            return state
    }
    
}

export const addPostActionCreator = (newPostText) =>({type: ADD_POST, newPostText})

export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUsersProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUser(userId)
        .then(response=>{
            dispatch(setUsersProfile(response.data))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(response=>{
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatusO(status)
        .then(response=>{
            if(response.data.resultCode === 0){
            dispatch(setStatus(status))}
        })
    }
}

export default profileReducer


