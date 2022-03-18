import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import * as styles from "../stylesheets/layout.module.css"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={styles.container}>
            <title className={styles.heading}>{pageTitle}</title>
            <Header />
            <main>
                <h1 className={styles.heading}>{pageTitle}</h1>
                <article>
                    {children}
                </article>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
