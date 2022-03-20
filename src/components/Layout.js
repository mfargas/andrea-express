import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'
import * as styles from "../stylesheets/layout.module.css"

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query MyQuery{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <title className={styles.heading}>{pageTitle} | {data.site.siteMetadata.title}</title>
            <Header />
            <main>
                <h1 className={styles.heading}>{data.siteMetadata.title}</h1>
                <article>
                    {children}
                </article>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout