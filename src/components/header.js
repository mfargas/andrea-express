import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavLinks from './NavLinks'
import Logo from '../assets/images/andrea-logo.png'
import styled from 'styled-components'
import * as styles from "../stylesheets/layout.module.css"
import { Button } from 'aws-amplify-react'

const NavButton = styled(Button).attrs(props => ({
    type: 'text',
    display: props.open ? 'block' : 'none',
}))`
    display: ${props => props.display};

    @media screen and (max-width: 750px){
        display: block;
    }
`;

const BurgerButton = styled(GiHamburgerMenu)`
    display: none;

    @media screen and (max-width: 750px){
        display: block;
    }
`;

const Navigation = styled.div.attrs(props => ({
    type: 'text',
    display: props.open ? 'block' : 'none',
}))`
    display: ${props => props.display};

    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`;

const Header = () => {
    const [nav, showNav] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => showNav(!nav)
    const closedNav = () => showNav(false)

    const changeMenu = () => {
        (window.scrollY > - 80) ? setScroll(true) :
            setScroll(false)
    }

    useEffect(() => {
        changeMenu()
        window.addEventListener('scroll', changeMenu)
    })

    return(
        <nav active={scroll} className={styles.nav}>
            <Link to="/" onClick={closedNav} >
                <img className={styles.logo} src={Logo} alt="andrea's logo"></img>
            </Link>
            {nav ? 
                <NavButton showNav={showNav} onClick={handleClick} open>
                    <GiHamburgerMenu className={styles.burger} open />
                </NavButton> : 
                <NavButton showNav={showNav} onClick={handleClick}>
                    <GiHamburgerMenu className={styles.burger}/>
                </NavButton> }
            {
                nav ? <Navigation open><NavLinks className={styles.navItemsOpen} nav={nav} /></Navigation> 
                    : <Navigation ><NavLinks className={styles.navItemsClosed} nav={nav} /> </Navigation>
            }
        </nav>
    )
}

export default Header;