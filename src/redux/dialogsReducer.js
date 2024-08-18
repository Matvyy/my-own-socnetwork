const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"


let initialState = {
    friendsDateList: [
        {name: "Elya", id: 1},
        {name: "Jienia", id: 2},
        {name: "George", id: 3},
        {name: "Vladus", id: 4},
    ],
      
    messageDateList: [
        {name: "Elya", text: "Hi, how are u?", id: 1},
        {name: "You", text: "Hi, i am fine, and u?", id: 2},
        {name: "Elya", text: "i am too?", id: 3},
        {name: "You", text: "That is cool", id: 4},
    ],

    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

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