import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./authReducer";
import {thunk} from "redux-thunk";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    findUsersReducer: findUsersReducer,
    authReducer: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk))


window.store = store

export default store
