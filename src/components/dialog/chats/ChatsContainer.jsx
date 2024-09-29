import { addMessageActionCreater } from "../../../redux/dialogsReducer";
import Chats from "./Chats";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return{
        dialogsReducer: state.dialogsReducer,

        }
}


let mapDispatchToProps = (dispatch) => {
    
    return{
        addMessage: (newMessageText)=>{
            dispatch(addMessageActionCreater(newMessageText))
        }
    }
}


let ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats)
export default ChatsContainer