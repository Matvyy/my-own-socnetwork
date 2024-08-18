const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const dialogsReducer = (state, action) => {

    switch(action.type) {
        case ADD_MESSAGE:
            let newPost = {
                name: "You", 
                text: state.newMessageText, 
                id: 5
            }      
            state.messageDateList.push(newPost)
            state.newMessageText = ""
            return state
        
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText    
            return state
        
        default: 
            return state
    }

}

export const addMessageActionCreater = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => {
    return{
        type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text
    }
}


export default dialogsReducer