import { useState, useRef, useEffect } from 'react';
import './header.css';
import myLogo from '../assets/logo.svg';
import BoxReveal from '../components/ui/box-reveal';
import menu from '../assets/menu.svg';
import Particles from '../components/ui/particles';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            closeMenu();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="logo">
                <BoxReveal>
                    <img src={myLogo} alt="logo" />
                </BoxReveal>
            </div>
            <ul id='menuList' className={isMenuOpen ? 'open' : ''} ref={menuRef}>
                <li><a href="#about" className="nav-btn" onClick={closeMenu}>ABOUT ME</a></li>
                <li><a href="#project" className="nav-btn" onClick={closeMenu}>PROJECTS</a></li>
                <li><a href="#contact" className="nav-btn" onClick={closeMenu}>CONTACT ME</a></li>
            </ul>
            <div className={`menu-bar ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
                <img src={menu} alt="menu" />
            </div>
        </header>
   
    );
}

export default Header;
