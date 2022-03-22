import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../stylesheets/layout.module.css'

const NavLinks = () => {
    return(
        < >
            <Link to="/" className={styles.navLinkText} activeClassName={styles.activeLink}>Home</Link>
            <Link to="/about" className={styles.navLinkText} activeClassName={styles.activeLink}>About</Link>
            <Link to="/causes" className={styles.navLinkText} activeClassName={styles.activeLink}>Causes to Follow</Link>
        </>
    )
}

export default NavLinks