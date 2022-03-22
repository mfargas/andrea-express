import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from "../stylesheets/layout.module.css"

const Layout = ({ pageTitle, author, description, children }) => {
    const data = useStaticQuery(graphql`
        query SiteData{
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <title className={styles.heading}>{data.site.siteMetadata.title} | {pageTitle}</title>
            <Header />
            <main>
                <article>
                    {children}
                </article>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout