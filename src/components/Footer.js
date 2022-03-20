import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from '../stylesheets/footer.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = ({children}) => {
    return(
        <>
            <div className={styles.footer}>
                <ul className={styles.footerLinks}>
                    <li className={styles.footerLinkItem}>
                        <Link to="/" className={styles.footerLogo}>
                            <StaticImage 
                                src="../assets/images/andrea-logo.png" 
                                className={styles.logo} 
                                alt="small logo" 
                            />
                        </Link>
                    </li>
                    <li className={styles.footerLinkItem}>
                        <Link to="/about" className={styles.footerLinkText}>About Me</Link>
                    </li>
                    <li className={styles.footerLinkItem}>
                        <Link to="/causes" className={styles.footerLinkText}>Causes to Follow</Link>
                    </li>
                </ul>
                <p className={styles.copyright} >&copy; {new Date().getFullYear().toString()}{" "} Developed by Marjoree E. F. using <Link to="https://www.gatsbyjs.com/" className={styles.copyrightLink} >Gatsby</Link></p>
                {children}
            </div>
        </>
    )
}

export default Footer;
