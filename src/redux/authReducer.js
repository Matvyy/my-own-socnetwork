import { headerAPI } from "../api/api"
const SET_USER_DATA = "SET-USER-DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthB: false,
}

const authReducer = (state=initialState, action)=>{
    switch(action.type) {
    
        case SET_USER_DATA: {
            return{
                ...state,
                ...action.data,
                isAuthB: true 
            }


        }
        default: 
            return state
    }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: { userId, email, login}})

export const isAuth = ()=>{
    return (dispatch) => {
        headerAPI.getUser().then(respose => {
            if(respose.data.resultCode === 0){
                let {id, email, login} = respose.data.data
                dispatch(setUserData(id, email, login))
            }
        })
    }
}

export default authReducer