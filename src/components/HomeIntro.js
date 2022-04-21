import * as React from 'react'
import * as styles from '../stylesheets/homeIntro.module.css'
import { StaticImage } from "gatsby-plugin-image"
import { RiAmazonFill } from "react-icons/ri";

const HomeIntro = () => {
    return(
        <div className={styles.container}>
            <div className={styles.homeIntro} >
                <h1>Actively helping our communities</h1>
            </div>
            <div className={styles.bio}>
                <h2>legal attorney's assistant</h2>
                <StaticImage src='../assets/images/andrea-congress.png' alt="andrea at the capitol"/>
                <RiAmazonFill />
            </div>
        </div>
    )
}

export default HomeIntro;
