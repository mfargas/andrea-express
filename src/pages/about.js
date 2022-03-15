import React from 'react'
import Layout from '../components/Layout'
import Biography from '../components/Biography'
import SkillList from '../components/SkillList'
import StatueImg from '../assets/images/justice-statue.jpg'
import * as styles from '../stylesheets/about.module.css'

export default function About() {
    const style = {flexDirection: "row"};
    return (
        <Layout pageTitle={About}>
            <section className={styles.landing}>
                <h1>About Andrea</h1>
                <img src={StatueImg} alt='Statue of woman holding scale' />
            </section>
            <Biography />
            <SkillList style={style} />
        </Layout>
    )
}