import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
// import EmailForm from './emailForm';
import * as styles from '../stylesheets/footer.module.css';

const Footer = () => {
    return(
        <>
            <div className={styles.footer}>
                <ul className={styles.footerLinks}>
                    <li className={styles.footerLinkItem}>
                        <Link to="/" className={styles.footerLogo}>
                            <StaticImage className={styles.logo} src='../images/andrea-logo.png' alt="small logo"/>
                        </Link>
                    </li>
                    <li className={styles.footerLinkItem}><Link to="/about" className={styles.footerLinkText}>About</Link></li>
                    <li className={styles.footerLinkItem}><Link to="/causes" className={styles.footerLinkText}>Causes</Link></li>
                </ul>
                {/* <EmailForm /> */}
                <p className={styles.copyright} >&copy; {new Date().getFullYear().toString()}{" "} Developed by Marjoree E. F. using <Link to="https://www.gatsbyjs.com/">Gatsby</Link></p>
            </div>
        </>
    )
}

export default Footer;
