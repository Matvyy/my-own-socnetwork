import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"


let store123 = {
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

        this._state.informationAboutProfile = profileReducer(this._state.informationAboutProfile, action)
        this._state.informationAboutDialogs = dialogsReducer(this._state.informationAboutDialogs, action)

        this._callSubscriber()

    },

    subscribe (observer) { 
        this._callSubscriber = observer
    }
}


export default store
window.store = store



// if(action.type===ADD_POST){

//     let nameOfPostAdder = this._state.informationAboutProfile.infoAboutMe.name
//         let newPost = {
//             id: 5,
//             name: nameOfPostAdder,
//             avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
//             text: this._state.informationAboutProfile.newPostText
    
//         }
//         this._state.informationAboutProfile.postsInformationList.push(newPost)
//         this._state.informationAboutProfile.newPostText = ''
//         this._callSubscriber()
// } else if (action.type===UPDATE_NEW_POST_TEXT){
//     this._state.informationAboutProfile.newPostText = action.newPostText
//     this._callSubscriber()
// } else if (action.type===ADD_MESSAGE){
//     let newPost = {name: "You", 
//     text: this._state.informationAboutDialogs.newMessageText, 
//     id: 5}      
//     this._state.informationAboutDialogs.messageDateList.push(newPost)
//     this._state.informationAboutDialogs.newMessageText = ""
//     this._callSubscriber()
// } else if (action.type===UPDATE_NEW_MESSAGE_TEXT){
//     this._state.informationAboutDialogs.newMessageText = action.newMessageText
//     this._callSubscriber()
// }


// [
//     {
//         id: 1, 
//         avatar: "https://www.pngitem.com/pimgs/m/71-716892_woman-avatar-icon-png-transparent-png.png", 
//         followed: true, 
//         name: "Elya", 
//         status: "beauty model", 
//         location: {
//             city: "Kiev", 
//             country: "Ukraine"
//         }
//     },
//     {
//         id: 2, 
//         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6X2lldt_gy2tcbXCKBbKWNVBpH-f1Mcjsw&s", 
//         followed: true, 
//         name: "Jienia", 
//         status: "programmer", 
//         location: {
//             city: "Kharkiv",
//              country: "Ukraine"
//         }
//     },
//     {
//         id: 3, 
//         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2boNo2OYa6CLv00F8NEYjNAK9Ib6UTH74g&s", 
//         followed: false, 
//         name: "George", 
//         status: "breakdancer", 
//         location: {
//             city: "Lvov", 
//             country: "Ukraine"
//         }
//     },
//     {
//         id: 4, 
//         avatar: "https://www.pngitem.com/pimgs/m/576-5768840_cartoon-man-png-avatar-transparent-png.png", 
//         followed: true, 
//         name: "Vladus", 
//         status: "I'm riding a scooter", 
//         location: {
//             city: "Poltava",
//              country: "Ukraine"
//         }
//     },
// ]