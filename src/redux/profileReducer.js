const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"

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
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:{
            let nameOfPostAdder = state.infoAboutMe.name
            let newPost = {
                id: 5,
                text: state.newPostText,
                name: nameOfPostAdder,
                avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
            }

            return {
                ...state,
                postsInformationList: [...state.postsInformationList, newPost],
                newPostText: ""
            }
            
        }
        
        case UPDATE_NEW_POST_TEXT:{

            return {
                ...state,
                newPostText: action.newPostText
            }
        }

        case SET_USER_PROFILE:{

            return {
                ...state,
                profile: action.profile
            }
        }
        default: 
            return state
    }
    
}

export const addPostActionCreator = () =>({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return{type: UPDATE_NEW_POST_TEXT, newPostText: text}
}
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export default profileReducer


