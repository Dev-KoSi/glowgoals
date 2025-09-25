import { useLocation } from 'react-router-dom'
import '../styles/Header.css'
import { useEffect, useState } from 'react';
import { Menu } from './Menu';

export function Header() {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    const location:any = useLocation();

    const [loc, setLoc] = useState<string>('');

    useEffect(() => {
        if(location.pathname === '/cosmetics') {
            setLoc('1');
        } else if(location.pathname === '/services') {
            setLoc('2');
        } else if(location.pathname === '/booking') {
            setLoc('3');
        } else if(location.pathname === '/contact') {
            setLoc('4');
        } else if(location.pathname === '/about') {
            setLoc('5');
        } else {
            setLoc('');
        }
    }, [location]);

    return (
        <div className="header-container">
            <div className="header-header">
                <div className="header-logo-app-name">
                    <a style={{width: 'fit-content'}} href="/"><div className="trans-logo-app-name">
                        <div className="logo">
                            <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"></path></svg>
                        </div>

                        <div className="app-name">
                            <div style={{fontFamily: "caveat"}}>
                                GlowGoals
                            </div>

                            <div>
                                Premium Cosmetics
                            </div>
                        </div>
                    </div></a>
                </div>

                <nav className='header-nav-links'>
                    <a href="/cosmetics"><span className="header-ourshop $" id={`ourshop-${loc}`}>Our Shop</span></a>

                    <a href="/services"><span className="header-services" id={`services-${loc}`}>Services</span></a>

                    <a href="/booking"><span className="header-booking" id={`booking-${loc}`}>Booking</span></a>

                    <a href="/contact"><span className="header-contact" id={`contact-${loc}`}>Contact</span></a>

                    <a href="/about"><span className="header-about" id={`about-${loc}`}>About</span></a>
                </nav>

                <div className="header-search-cart-wishlist">
                    <div className="header-search-input">
                        <input type="text" placeholder="Search products..." />

                        <div className="header-search-icon">
                            <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>

                    <a className='header-cart' href="/cart">
                        <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>

                        <span className="header-cart-count">99+</span>
                    </a>

                    <a className='header-wishlist' href="/wishlist">
                        <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                        <span className="header-wishlist-count">1</span>
                    </a>
                </div>

                <div className="header-menu">
                    <svg onClick={() => setToggleMenu(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                        <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            
            <Menu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>
        </div>
    )
}