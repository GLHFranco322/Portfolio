import { useState } from 'react';
import './Hamburger.css';

export default function Hamburger() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <nav className={`off-screen-menu ${isActive ? 'active' : ''}`}>
                <ul className="off-screen-menu__list">
                    <li><i></i></li>
                    <li><i></i></li>
                    <li><i></i></li>
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