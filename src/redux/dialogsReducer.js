const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
    friendsDateList: [
        {name: "Elya", id: 1, avatar: "https://www.pngitem.com/pimgs/m/71-716892_woman-avatar-icon-png-transparent-png.png", status: true},
        {name: "Jienia", id: 2, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6X2lldt_gy2tcbXCKBbKWNVBpH-f1Mcjsw&s", status: false},
        {name: "George", id: 3, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2boNo2OYa6CLv00F8NEYjNAK9Ib6UTH74g&s", status: false},
        {name: "Vladus", id: 4, avatar: "https://www.pngitem.com/pimgs/m/576-5768840_cartoon-man-png-avatar-transparent-png.png", status: true},
    ],
      
    messageDateList: [
        {name: "Elya", text: "Hi, how are u?", id: 1, avatar: "https://www.pngitem.com/pimgs/m/71-716892_woman-avatar-icon-png-transparent-png.png"},
        {name: "You", text: "Hi, i am fine, and u?", id: 2, avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"},
        {name: "Elya", text: "i am too?", id: 3, avatar: "https://www.pngitem.com/pimgs/m/71-716892_woman-avatar-icon-png-transparent-png.png"},
        {name: "You", text: "That is cool", id: 4, avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"},
    ],
}

const dialogsReducer = (state = initialState, action) => {

    
    switch(action.type) {
    
        case ADD_MESSAGE: {
            let text = action.newMessageText
            let newMessage = {name: "You", text: text, id: 4, avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"}

            return{
                ...state,
                messageDateList: [...state.messageDateList, newMessage],
            }


        }
        default: 
            return state
    }

}

export const addMessageActionCreater = (newMessageText) => {
    return{type: ADD_MESSAGE, newMessageText}
}



export default dialogsReducer