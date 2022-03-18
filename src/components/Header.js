import * as React from 'react'
import { Link } from 'gatsby'
import { BiMenuAltRight } from 'react-icons/bi'
import Logo from '../assets/images/andrea-logo.png'
import * as styles from "../stylesheets/layout.module.css"
import { Button } from 'aws-amplify-react'

const Header = () => {
    return(
        <nav>
            <Link to="/"><img className={styles.logo} src={Logo} alt="andrea's logo"></img></Link>
            <Button><BiMenuAltRight /></Button>
            <div>
                <Link to="/" className={styles.navLinkText} activeClassName={styles.activeLink}>Home</Link>
                <Link to="/about" className={styles.navLinkText} activeClassName={styles.activeLink}>About</Link>
                <Link to="/causes" className={styles.navLinkText} activeClassName={styles.activeLink}>Causes</Link>
            </div>
        </nav>
    )
}

export default Header;
