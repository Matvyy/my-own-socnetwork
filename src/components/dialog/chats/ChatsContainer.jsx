import { addMessageActionCreater, updateNewMessageTextActionCreator } from "../../../redux/dialogsReducer";
import Chats from "./Chats";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return{
        dialogsReducer: state.dialogsReducer,

        }
}


let mapDispatchToProps = (dispatch) => {
    
    return{
        updateNewTextMessage: (text)=>{
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMessage: ()=>{
            dispatch(addMessageActionCreater())
        }
    }
}


let ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats)
export default ChatsContainer