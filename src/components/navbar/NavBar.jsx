import React from "react";
import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom";

const NavBar = ()=>{
    const activeLink = ({ isActive }) => isActive ? styles.active : undefined
    return(
        <div className={styles.navbar}>   

            <div className={styles.item}>
                <NavLink className={activeLink} to="/profile/31576">
                    <div className={styles.linkContent}>
                        <img src="https://cdn.icon-icons.com/icons2/3215/PNG/512/user_people_male_avatar_man_icon_196478.png" alt="profile"/>
                        <span>Profile</span>
                    </div>
                </NavLink>
            </div>

            <div className={styles.item}>
                <NavLink className={activeLink} to="/dialog">
                    <div className={styles.linkContent}>
                        <img src="https://cdn.icon-icons.com/icons2/3215/PNG/96/envelope_message_letter_mail_email_icon_196492.png" alt="dialogs" />
                        <span>Messages</span>
                    </div>
                </NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/musik">
                    <div className={styles.linkContent}>
                        <img src="https://cdn.icon-icons.com/icons2/3215/PNG/96/music_melody_audio_song_tone_icon_196488.png" alt="musik" />
                        <span>Musik</span>
                    </div>
                </NavLink>  
            </div>

            <div className={styles.item}>
                <NavLink to="/news">
                    <div className={styles.linkContent}>
                        <img src="https://cdn.icon-icons.com/icons2/4091/PNG/96/document_icon_259655.png" alt="news" />
                        <span>News</span>
                    </div>
                </NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/setting">
                    <div className={styles.linkContent}>
                        <img src="https://cdn.icon-icons.com/icons2/3215/PNG/96/settings_options_configuration_setting_system_icon_196481.png" alt="setting" />
                        <span>Setting</span>
                    </div>
                </NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/find-users">
                    <div className={styles.linkContent}>
                        <img src="https://cdn.icon-icons.com/icons2/3841/PNG/96/users_line_icon_235530.png" alt="setting" />
                        <span>Find users</span>
                    </div>
                </NavLink>
            </div>

            {/* icon-icons.com */}
        </div>
    )
}

export default NavBar