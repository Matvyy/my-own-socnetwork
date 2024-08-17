const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"


let store = {
    _callSubscriber(){
        console.log('123')
    },

    _state: { 
        informationAboutProfile: {
            postsInformationList: [
                {name: "name", text: "first post", avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", id: 1},
                {name: "name", text: "second post", avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", id: 2},
                {name: "name", text: "third post", avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", id: 3},
            ],
            
            infoAboutMe: {
                name: "name",
                avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
                description: "description"
            },
            newPostText: ""
        },
        
        informationAboutDialogs: {
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
        },
        
    },

    getState(){
        return this._state
    },

    dispatch(action){
        if(action.type===ADD_POST){
            let nameOfPostAdder = this._state.informationAboutProfile.infoAboutMe.name
    
            let newPost = {
                id: 5,
                name: nameOfPostAdder,
                avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
                text: this._state.informationAboutProfile.newPostText
        
            }
            this._state.informationAboutProfile.postsInformationList.push(newPost)
            this._state.informationAboutProfile.newPostText = ''
            this._callSubscriber()
        } else if (action.type===UPDATE_NEW_POST_TEXT){
            this._state.informationAboutProfile.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type===ADD_MESSAGE){
            let newPost = {name: "You", 
            text: this._state.informationAboutDialogs.newMessageText, 
            id: 5}      
            this._state.informationAboutDialogs.messageDateList.push(newPost)
            this._state.informationAboutDialogs.newMessageText = ""
            this._callSubscriber()
        } else if (action.type===UPDATE_NEW_MESSAGE_TEXT){
            this._state.informationAboutDialogs.newMessageText = action.newText
            this._callSubscriber()
        }

    },

    subscribe (observer) { 
        this._callSubscriber = observer
    }
}

export const addPostActionCreator = () =>{
    return{
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return{type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const addMessageActionCreater = () => {
    return{
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return{
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
}

export default store
window.store = store

