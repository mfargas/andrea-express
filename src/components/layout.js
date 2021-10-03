import * as React from 'react'
import Header from './header'
import Footer from './footer'
import { container, heading } from "../stylesheets/layout.module.css"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <title className={heading}>{pageTitle}</title>
            <Header />
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
                <article>
                    <h3>Welcome again</h3>
                </article>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout