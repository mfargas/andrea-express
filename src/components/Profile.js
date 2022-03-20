import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import * as styles from '../stylesheets/homeIntro.module.css'

const Profile = () => {
    return <StaticImage 
        src="../assets/images/andrea-congress.png" 
        alt="andrea profile picture"
        layout="constrained"
        placeholder="blurred"
        loading="eager"
        className={styles.profile}
        objectPosition="50% 50%"
    />
}

export default Profile