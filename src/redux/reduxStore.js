import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./authReducer";
import {thunk} from "redux-thunk";
import appReducer from "./appReducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    findUsersReducer: findUsersReducer,
    authReducer: authReducer,
    appReducer: appReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))


window.store = store

export default store
