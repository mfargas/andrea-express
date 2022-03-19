import * as React from 'react'
import * as styles from '../stylesheets/homeIntro.module.css'
import { StaticImage } from "gatsby-plugin-image"
// import Profile from './Profile';
import { RiAmazonFill } from "react-icons/ri";

const HomeIntro = () => {
    return(
        <div className={styles.container}>
            <div className={styles.homeIntro} >
                <h1>Actively helping our communities</h1>
            </div>
            <div className={styles.bio}>
                <h2>Legal Attorney Assistant For Amazon</h2>
                <RiAmazonFill />
                <StaticImage
                    src="../assets/images/andrea-congress.png"
                    alt="andrea profile picture"
                    width={100}
                    height={300}
                />
            </div>
        </div>
    )
}

export default HomeIntro;
