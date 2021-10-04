import * as React from 'react';
import { Link } from 'gatsby';
import EmailForm from './emailForm';
import FooterLogo from '../images/SVG/name-logo.svg';
import { footerLogo, footerLinks, footerLinkItem, footerLinkText } from '../stylesheets/layout.module.css';

const Footer = () => {
    return(
        <footer>
            <Link to="/" className={footerLogo}>
                <img src={FooterLogo} alt="small logo"></img>
            </Link>
            <div>
                <ul className={footerLinks}>
                    <li className={footerLinkItem}><Link to="/" className={footerLinkText}>Home</Link></li>
                    <li className={footerLinkItem}><Link to="/about" className={footerLinkText}>About</Link></li>
                </ul>
                <EmailForm />
            </div>
            <p>Site developed by Marjoree E. F. &copy; {new Date().getFullYear().toString()}{" "}</p>
        </footer>
    )
}

export default Footer;