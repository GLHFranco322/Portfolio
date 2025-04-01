import React from 'react'
import './header.css'
import Hamburger from './components/Hamburger'

export const Header = () => {
    return (
        <>
            <header id="headerMain">
                <img src="/icons/FS.png" alt="logo FS" />
                <Hamburger />
            </header>
        </>
    )
}