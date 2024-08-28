import { usersAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET=USERS"
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE"
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT"
const TOGGLR_IS_FETCHING = "TOGGLE-IS-FETCHING"
const FOLLOWING_IS_FETCHING = "FOLLOWING-IS-FETCHING"

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingIsFetching: []

}

const findUsersReducer = (state = initialState, action) => {
    
    switch(action.type){

        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return{...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return{...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return{...state, users: action.users}
        }

        case CHANGE_CURRENT_PAGE: {
            return{
                ...state,
                currentPage: action.pageNumber
            }
        }

        case TOTAL_USERS_COUNT: {
            return{
                ...state,
                totalUsersCount: action.totalCount
            }
        }

        case TOGGLR_IS_FETCHING: {
            return{
                ...state,
                isFetching: action.isFetching
            }
        }

        case FOLLOWING_IS_FETCHING: {
            return{
                ...state,
                followingIsFetching: action.isFetching 
                ? [...state.followingIsFetching, action.userId]
                : state.followingIsFetching.filter(id => id !== action.userId)
            }
        }
        
        //[...state.followingIsFetching, action.userId]
        default:
            return state
    }

}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const changeCurrentPage = (pageNumber) => ({type: CHANGE_CURRENT_PAGE, pageNumber})
export const setTotalUserCount = (totalCount) => ({type: TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLR_IS_FETCHING, isFetching})
export const toggleFollowingIsFetching = (isFetching, userId) => ({type: FOLLOWING_IS_FETCHING, isFetching, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then((data)=>{
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUserCount(data.totalCount))
    })
}}

export const unfollowThunkCreator = (user) => {
    return (dispatch) => {
        dispatch(toggleFollowingIsFetching(true, user.id))
        dispatch(toggleIsFetching(true))
        usersAPI.setUnfollow(user).then((response)=>{
            if(response.data.resultCode===0){
                dispatch(toggleFollowingIsFetching(false, user.id))
                dispatch(toggleIsFetching(false))
                dispatch(unfollow(user.id))
            }
            
        })
    }
}

export const followThunkCreator = (user) => {
    return (dispatch) => {
        dispatch(toggleFollowingIsFetching(true, user.id))
        dispatch(toggleIsFetching(true))
        usersAPI.setFollow(user).then((response)=>{
            if(response.data.resultCode===0){
                dispatch(toggleFollowingIsFetching(false, user.id))
                dispatch(toggleIsFetching(false))
                dispatch(follow(user.id))
            }
            
        })
    }
}

export default findUsersReducer


