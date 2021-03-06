import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Biography from '../components/Biography'
import SkillList from '../components/SkillList'
import EmailForm from '../components/emailForm'
import * as styles from '../stylesheets/about.module.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function About({ data }) {
    const style = {flexDirection: "row", justifyContent: "center"};
    return (
        <Layout pageTitle={About}>
            <Seo title='About' />
            <section className={styles.landing}>
                <h1>About Andrea</h1>
                <StaticImage 
                    src='../images/justice-statue.jpg'
                    alt='Statue of woman holding scale'
                    layout='constrained'
                    className={styles.statue}
                />
            </section>
            <Biography />
            <SkillList style={style} />
            <EmailForm />
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
    `