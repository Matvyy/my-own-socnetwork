import React from "react"
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom"

const Header = (props) =>{


    return(
      <div className={styles.header}>
        <div className={styles.img}>
          <img src="https://inrdeals.sgp1.cdn.digitaloceanspaces.com/production/341644/biba--logo-400-x-200.png" alt="biba" />
          <div className={styles.loginBlock}>
          {
            props.login
              ? <div>{props.login} <button onClick={props.logout}>logout</button></div> : <div><NavLink to="/login"> login </NavLink></div> 
          }
          </div>
        </div>
            
      </div>
    )
  }

  export default Header