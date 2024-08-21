const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET=USERS"
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE"
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT"
const TOGGLR_IS_FETCHING = "TOGGLE-IS-FETCHING"

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,

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

export default findUsersReducer


