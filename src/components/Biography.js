import * as React from 'react'
import * as styles from '../stylesheets/about.module.css'
import AndreaProfile from '../assets/images/profile-image.png'
// import { StaticImage } from "gatsby-plugin-image"


const Biography = () => {
    return (
        <section className={styles.aboutLanding}>
            <img src={AndreaProfile} alt="andrea-profile" className={styles.profileImage} />
            <div className={styles.aboutBio}>
                <p >Andrea Garcia is an attorney assistant at law, ready to help
                    her clients and her community. She is a resource to Los Angeles
                    locals.
                </p>
                <p > With an insight into the inner workings of Washington D.C.
                    Congressional Law, a Bachelor Degree from California State University,
                    Long Beach, and experience assisting local attorneys, Andrea
                    can help you with your next case.
                </p>
            </div>
        </section>
    )
}

export default Biography;