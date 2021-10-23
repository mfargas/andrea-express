import React from 'react'
import Layout from '../components/layout'
import SkillList from '../components/skillList'
import AndreaProfile from '../images/profile-image.png'
import * as styles from '../stylesheets/about.module.css'

export default function About() {
    return (
        <Layout >
            <section className={styles.aboutLanding}>
                <img src={AndreaProfile} alt="andrea-profile" className={styles.profileImage} />
                <div>
                <p className={styles.aboutBio}>Andrea Garcia is an attorney assistant at law, ready to help
                    her clients and her community. She is a resource to Los Angeles
                    locals.
                </p>
                <p className={styles.aboutBio}> With an insight into the inner workings of Washington D.C.
                    Congressional Law, a Bachelor Degree from California State University,
                    Long Beach, and experience assisting local attorneys, Andrea
                    can help you with your next case.
                </p>
                </div>
            </section>
            <SkillList />
        </Layout>
    )
}