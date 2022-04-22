import * as React from 'react'
import * as styles from '../stylesheets/about.module.css'
import { StaticImage } from "gatsby-plugin-image"


const Biography = () => {
    return (
        <section className={styles.aboutLanding}>
            <StaticImage 
                src='../images/andrea-congress.png'
                alt="andrea-profile" 
                className={styles.profileImage} 
            />
            {/* <img src={AndreaProfile} alt="andrea-profile" className={styles.profileImage} /> */}
            <div className={styles.aboutBio}>
                <p > With an insight into the inner workings of Washington D.C.
                    Congressional Law, a Bachelor Degree from California State University,
                    Long Beach, and experience assisting local attorneys, Andrea is
                    ready to help her clients and her community. She is a resource to Los Angeles
                    locals, and now an asset to one of Amazon's legal teams.
                </p>
            </div>
        </section>
    )
}

export default Biography;