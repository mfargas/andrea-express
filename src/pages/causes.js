// import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import CauseList from '../components/CauseList'
import * as styles from '../stylesheets/causes.module.css'

export default function Causes() {
    return (
        <Layout pageTitle={Causes}>
            <section className={styles.causesLanding}>
                <h2> Causes to Follow </h2>
            </section>
            <CauseList />
        </Layout>
    )
}