import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/SVG/name-logo.svg'
import LinkedInLogo from '../images/linkedin-icon.svg'
import * as styles from "../stylesheets/layout.module.css"

const Header = () => {
    return(
        <header>
            <Link to="/"><img className={styles.logo} src={Logo} alt="andrea's logo"></img></Link>
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    <li className={styles.navLinkItem}><Link to="/" className={styles.navLinkText}>Home</Link></li>
                    <li className={styles.navLinkItem}><Link to="/about" className={styles.navLinkText}>About</Link></li>
                    <li ><Link to="/" >
                        <img className={styles.socialIcon} src={LinkedInLogo} alt="linkedin logo icon"></img></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;