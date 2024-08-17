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

    addPost () {
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
    },

    updateNewPostText (newText) {
        this._state.informationAboutProfile.newPostText = newText
        this._callSubscriber()
    },

    addMessage () {
        let newPost = {name: "You", 
            text: this._state.informationAboutDialogs.newMessageText, 
            id: 5}      
            this._state.informationAboutDialogs.messageDateList.push(newPost)
            this._state.informationAboutDialogs.newMessageText = ""
            this._callSubscriber()
    },

    updateNewMessageText (newText) {
        this._state.informationAboutDialogs.newMessageText = newText
        this._callSubscriber()
    },

    subscribe (observer) { 
        this._callSubscriber = observer
    }
}

export default store











// let rerendereEntireTree = () => {
//     console.log('123')
// }



// let state = { 
//     informationAboutProfile: {
//         postsInformationList: [
//             {name: "name", text: "first post", avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", id: 1},
//             {name: "name", text: "second post", avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", id: 2},
//             {name: "name", text: "third post", avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg", id: 3},
//         ],
        
//         infoAboutMe: {
//             name: "name",
//             avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
//             description: "description"
//         },
//         newPostText: ""
//     },
    
//     informationAboutDialogs: {
//         friendsDateList: [
//             {name: "Elya", id: 1},
//             {name: "Jienia", id: 2},
//             {name: "George", id: 3},
//             {name: "Vladus", id: 4},
//         ],
          
//         messageDateList: [
//             {name: "Elya", text: "Hi, how are u?", id: 1},
//             {name: "You", text: "Hi, i am fine, and u?", id: 2},
//             {name: "Elya", text: "i am too?", id: 3},
//             {name: "You", text: "That is cool", id: 4},
//         ],

//         newMessageText: ""
//     },
    
// }


// export let addPost = () => {
//     let nameOfPostAdder = state.informationAboutProfile.infoAboutMe.name

//     let newPost = {
//         id: 5,
//         name: nameOfPostAdder,
//         avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
//         text: state.informationAboutProfile.newPostText

//     }
//     state.informationAboutProfile.postsInformationList.push(newPost)
//     state.informationAboutProfile.newPostText = ''
//     rerendereEntireTree()
// }

// export let updateNewPostText = (newText) => {
//     state.informationAboutProfile.newPostText = newText
//     rerendereEntireTree()
// }

// export let addMessage = () => {
//     let newPost = {name: "You", 
//         text: state.informationAboutDialogs.newMessageText, 
//         id: 5}      
//         state.informationAboutDialogs.messageDateList.push(newPost)
//         state.informationAboutDialogs.newMessageText = ""
//         rerendereEntireTree()
// }

// export let updateNewMessageText = (newText) => {
//     state.informationAboutDialogs.newMessageText = newText
//     rerendereEntireTree()
// }
 
// export const subscribe = (observer) => { 
//     rerendereEntireTree = observer
//  }



// export default state

