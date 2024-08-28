import { connect } from "react-redux";
import { follow, setUsers, unfollow, changeCurrentPage, setTotalUserCount, toggleIsFetching, toggleFollowingIsFetching, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator,
} from "../../redux/findUsersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../api/api";
import { compose } from "redux";
import { withAuthReducer } from "../hoc/withAuthRedirect";

class UsersComponent extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.changeCurrentPage(page)
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }
    
    render () {
        return (

            <>
                {this.props.isFetching ? <Preloader/> : null} 
                <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingIsFetching={this.props.followingIsFetching}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
                followThunkCreator={this.props.followThunkCreator}
                />
            </>


    )
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.findUsersReducer.users,
        pageSize: state.findUsersReducer.pageSize,
        totalUsersCount: state.findUsersReducer.totalUsersCount,
        currentPage: state.findUsersReducer.currentPage,
        isFetching: state.findUsersReducer.isFetching,
        followingIsFetching: state.findUsersReducer.followingIsFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return{
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users)=>{
//             dispatch(setUsersAC(users))
//         },
//         changeCurrentPage: (pageNumber)=>{
//             dispatch(changeCurrentPageAC(pageNumber))
//         },
//         setTotalUserCount: (totalCount)=>{
//             dispatch(setTotalUserCountAC(totalCount))
//         },
//         toggleIsFEtching: (isFetching)=>{
//             dispatch(togglsFetchingAC(isFetching))
//         },
//     }
// }

// let UsersContainer = connect(mapStateToProps, 
//     {changeCurrentPage, setTotalUserCount, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator, }
// )(UsersAPIComponent)

// export default UsersContainer

export default compose(connect(mapStateToProps,{changeCurrentPage, setTotalUserCount, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator}), withAuthReducer)(UsersComponent)

