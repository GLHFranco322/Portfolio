import { useState } from 'react';
import './Hamburger.css';

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <nav className={`off-screen-menu ${isActive ? 'active' : ''}`}>
                <ul className="off-screen-menu__list">
                    <li><a href="#" onClick={toggleMenu}><i></i></a></li>
                    <li><a href="#sectionTwo" onClick={toggleMenu}><i></i></a></li>
                    <li><a href="#sectionThree" onClick={toggleMenu}><i></i></a></li>
                </ul>
            </nav>

            <nav id="nav_menu">
                <div
                    className={`hamburger ${isActive ? 'active' : ''}`}
                    id="hamburger"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    );
}

export default Hamburger