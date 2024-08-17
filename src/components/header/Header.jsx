import React from "react"
import styles from "./Header.module.css"

const Header = () =>{
    return(
      <div className={styles.header}>
        <div className={styles.img}>
          <img src="https://inrdeals.sgp1.cdn.digitaloceanspaces.com/production/341644/biba--logo-400-x-200.png" alt="biba" />
        </div>
            
      </div>
    )
  }

  export default Header