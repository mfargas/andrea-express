import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/SVG/name-logo.svg'
import LinkedInLogo from '../images/linkedin-icon.svg'
import {nav, logo, navLinks, navLinkItem, navLinkText, socialIcon } from "../stylesheets/layout.module.css"

const Header = () => {
    return(
        <header>
            <Link to="/"><img className={logo} src={Logo} alt="andrea's logo"></img></Link>
            <nav style={nav}>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li ><Link to="/" >
                        <img className={socialIcon} src={LinkedInLogo} alt="linkedin logo icon"></img></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;