import * as React from 'react';
import { Link } from 'gatsby';
import EmailForm from './emailForm';
// import FooterLogo from '../assets/images/andrea-logo.png';
import * as styles from '../stylesheets/footer.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
    return(
        <>
            <div className={styles.footer}>
                <ul className={styles.footerLinks}>
                    <li className={styles.footerLinkItem}>
                        <Link to="/" className={styles.footerLogo}>
                            <StaticImage src="../assets/images/andrea-logo.png" className={styles.logo} alt="small logo" />
                        </Link>
                    </li>
                    <li className={styles.footerLinkItem}><Link to="/about" className={styles.footerLinkText}>About</Link></li>
                </ul>
                <EmailForm />
            </div>
            <p className={styles.copyright} >&copy; {new Date().getFullYear().toString()}{" "} Developed by Marjoree E. F. using <Link to="https://www.gatsbyjs.com/">Gatsby</Link></p>
        </>
    )
}

export default Footer;
