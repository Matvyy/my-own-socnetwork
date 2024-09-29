import { loginAPI } from "../api/api"
import { stopSubmit } from "redux-form"
import { isAuth, setUserData } from "./authReducer"
const SET_INITIALIZED_SUCCESS = "SET-INITIALEZED"

let initialState = {
    initialized: false,
}

const appReducer = (state=initialState, action)=>{
    switch(action.type) {
    
        case SET_INITIALIZED_SUCCESS: {
            return{
                ...state,
                initialized: true,

            }


        }
        default: 
            return state
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS})

export const initializeApp = ()=>(dispatch) =>{

        let promise = dispatch(isAuth())

        Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer