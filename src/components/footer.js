import * as React from 'react';
import { Link } from 'gatsby';
import EmailForm from './emailForm';
import FooterLogo from '../images/SVG/name-logo.svg';
import * as styles from '../stylesheets/footer.module.css';

const Footer = () => {
    return(
        <footer>
            <div className={styles.footer}>
                <ul className={styles.footerLinks}>
                    <li className={styles.footerLinkItem}>
                        <Link to="/" className={styles.footerLogo}>
                            <img src={FooterLogo} className={styles.logoImg_f} alt="small logo"></img>
                        </Link>
                    </li>
                    <li className={styles.footerLinkItem}><Link to="/about" className={styles.footerLinkText}>About</Link></li>
                </ul>
                <EmailForm />
            </div>
            <p>Site developed by Marjoree E. F. &copy; {new Date().getFullYear().toString()}{" "}</p>
        </footer>
    )
}

export default Footer;