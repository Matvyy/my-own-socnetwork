import { loginAPI } from "../api/api"
import { stopSubmit } from "redux-form"
const SET_USER_DATA = "SET-USER-DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    //isAuth: false,
}

const authReducer = (state=initialState, action)=>{
    switch(action.type) {
    
        case SET_USER_DATA: {
            return{
                ...state,
                ...action.payload,

            }


        }
        default: 
            return state
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: { userId, email, login, isAuth}})

export const isAuth = ()=>(dispatch) =>{
    return loginAPI.getUser().then(respose => {
            if(respose.data.resultCode === 0){
                let {id, email, login} = respose.data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
    }


export const login = (email, password, rememberMe) => (dispatch) => {

    loginAPI.login(email, password, rememberMe)
    .then(response => {
        if(response.data.resultCode === 0){
            dispatch(isAuth())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit( "login", {_error: message}))
        }
    })
}

export const logout = () => (dispatch) => {
    loginAPI.logout()
    .then(respose => {
        if(respose.data.resultCode === 0){
            dispatch(setUserData(null, null, null, false))
        }
    })
}

export default authReducer