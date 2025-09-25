import React, { useEffect, useState } from 'react'
import '../styles/Menu.css'
import { useLocation } from 'react-router-dom';

type MenuProp = {
    setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>,
    toggleMenu: boolean
}

export function Menu({setToggleMenu, toggleMenu}: MenuProp) {
    const [nav, setNav] = useState<string>('')

    const location:any = useLocation();

    useEffect(() => {
        if(location.pathname === '/cosmetics') {
            setNav('ourshop');
        } else if(location.pathname === '/services') {
            setNav('services');
        } else if(location.pathname === '/booking') {
            setNav('booking');
        } else if(location.pathname === '/contact') {
            setNav('contact');
        } else if(location.pathname === '/about') {
            setNav('about');
        } else {
            setNav('');
        }
    }, [location]);

    return (
        <div className={`menu-container ${toggleMenu ? 'open' : ''}`}>
            <div className="head">
                <div style={{fontFamily: 'Caveat'}} className="txt">
                    Menu
                </div>

                <svg onClick={() => setToggleMenu(false)} height="24" width="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>

            <div className="search-input">
                <input type="text" placeholder="Search products..." />

                <div className="search-icon">
                    <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>

            <div className="links">
                <nav className="nav-links">
                    <a href="/cosmetics"><span className={`${nav}-ourshop`}>Our Shop</span></a>

                    <a href="/services"><span className={`${nav}-services`}>Services</span></a>

                    <a href="/booking"><span className={`${nav}-booking`}>Booking</span></a>

                    <a href="/contact"><span className={`${nav}-contact`}>Contact</span></a>

                    <a href="/about"><span className={`${nav}-about`}>About</span></a>
                </nav>
            </div>
        </div>
    )
}