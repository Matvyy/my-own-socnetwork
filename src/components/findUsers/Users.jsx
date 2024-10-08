import React from "react";
import styles from "./Users.module.css"
import userPhoto from "./../../assets/images/user_avatar.png"
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    // for (let i=1; i<= pagesCount; i++) {
    //     pages.push(i)
    // }
    if (pagesCount > 10) {
        if (props.currentPage <= 5) {
            pages = [1, 2, 3, 4, 5, '...', pagesCount];
        } else if (props.currentPage >= pagesCount - 4) {
            pages = [1, '...', pagesCount - 4, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
        } else {
            pages = [1, '...', props.currentPage - 1, props.currentPage, props.currentPage + 1, '...', pagesCount];
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    }


    return (
        <div className={styles.findUsers}>
            <div>
            {pages.map(pages => {

                return (
                    // <span 
                    // className={this.props.currentPage === pages && styles.selectedPade || undefined}
                    // onClick={() => {this.onPageChanged(pages)}}
                    // >
                    // {pages}
                    // </span>

                    <span
                        key={pages.id}
                        className={props.currentPage === pages && styles.selectedPade || undefined}
                        onClick={pages !== '...' ? () => { props.onPageChanged(pages) } : undefined}
                        style={pages === '...' ? { cursor: 'default' } : { cursor: 'pointer' }}>
                        {pages}
                    </span>
                );
                })}
            </div>
            <ul className={styles.userList}>
            {props.users.map(user => <div key={user.id}>
                    <li className={styles.userItem}>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={user.name}/>
                        <div className={styles.userInfo}>
                            <h3>{user.name}</h3>
                            <p>{user.state}</p>
                            {/* <div className={styles.userLocation}>{user.location.city}, {user.location.country}</div> */}
                        </div>
                    </NavLink>
                        {user.followed 
                        ? <button disabled={props.followingIsFetching
                            .some((id)=>id===user.id)} onClick={()=>{props.unfollowThunkCreator(user)}} className={styles.btnFollowed}>Following</button> 
                        : <button disabled={props.followingIsFetching
                            .some((id)=>id===user.id)} onClick={()=>{props.followThunkCreator(user)}} className={styles.btnNotFollowed}>Follow</button>}
                    </li>

            </div>)}
            </ul>
        </div>
    )

}

export default Users