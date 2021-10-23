import React from 'react'
import Layout from '../components/layout'
import SkillList from '../components/skillList'
import AndreaProfile from '../images/profile-image.png'
import * as styles from '../stylesheets/about.module.css'

export default function About() {
    return (
        <Layout>
            <h1>About Me</h1>
            <img src={AndreaProfile} alt="andrea-profile" className={styles.profileImage} />
            <SkillList />
        </Layout>
    )
}