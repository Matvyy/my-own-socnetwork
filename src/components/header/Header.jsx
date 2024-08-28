import React from "react"
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom"

const Header = (props) =>{
    return(
      <div className={styles.header}>
        <div className={styles.img}>
          <img src="https://inrdeals.sgp1.cdn.digitaloceanspaces.com/production/341644/biba--logo-400-x-200.png" alt="biba" />
          <div className={styles.loginBlock}>
          {props.isAuth ? props.login
            :<NavLink to="/login"> login </NavLink>}
          </div>
        </div>
            
      </div>
    )
  }

  export default Header