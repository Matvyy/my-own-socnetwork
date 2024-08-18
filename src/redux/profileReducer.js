const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state, action) => {

    switch(action.type) {
        case ADD_POST:
            let nameOfPostAdder = state.infoAboutMe.name
            let newPost = {
                id: 5,
                name: nameOfPostAdder,
                avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
                text: state.newPostText
        
            }
            state.postsInformationList.push(newPost)
            state.newPostText = ''
            return state
            
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newPostText
            return state
        
        default: 
            return state
    }
   
}

export const addPostActionCreator = () =>({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => {
    return{type: UPDATE_NEW_POST_TEXT, newPostText: text}
}


export default profileReducer



// if(action.type===ADD_POST){

//     let nameOfPostAdder = state.infoAboutMe.name
//         let newPost = {
//             id: 5,
//             name: nameOfPostAdder,
//             avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
//             text: state.newPostText
    
//         }
//         state.postsInformationList.push(newPost)
//         state.newPostText = ''
// } else if (action.type===UPDATE_NEW_POST_TEXT){
//     state.newPostText = action.newPostText
// }

// return state