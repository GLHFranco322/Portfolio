import React from 'react'
import './header.css'
import Hamburger from './components/Hamburger'

const Header = () => {
    return (
        <>
            <header id="headerMain">
                <a href="#sectionOne">
                    <img src="/icons/FS.png" alt="logo FS" />
                </a>
                <Hamburger />
            </header>
        </>
    )
}

export default Header