import { connect } from "react-redux";
import { follow, setUsers, unfollow, changeCurrentPage, setTotalUserCount, toggleIsFetching,
} from "../../redux/findUsersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersAPIComponent extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response)=>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })

    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true)
        this.props.changeCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((response)=>{
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            
        })
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
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}/>
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
        isFetching: state.findUsersReducer.isFetching
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

let UsersContainer = connect(mapStateToProps, 
    {follow, unfollow, setUsers, changeCurrentPage,setTotalUserCount,toggleIsFetching}
)(UsersAPIComponent)

export default UsersContainer

