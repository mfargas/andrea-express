import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/SVG/name-logo.svg'
import LinkedInLogo from '../images/linkedin-icon.svg'
import {logo, navLinks, navLinkItem, navLinkText } from "../stylesheets/layout.module.css"

const Header = () => {
    return(
        <header>
            <Link to="/"><img className={logo} src={Logo} alt="andrea's logo"></img></Link>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                </ul>
                <div className="socialIcon">
                    <Link to="/" className="linkedinIcon"><img src={LinkedInLogo} ></img> </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;