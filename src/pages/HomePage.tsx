import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import '../styles/HomePage.css'
import '../styles/Header.css'

export function HomePage() {

    const [toggleHeader, setToggleHeader] = useState<boolean>(false);
    
    useEffect(() => {
    const handleScroll = () => {
        const currentScroll = window.scrollY;
        console.log(currentScroll)

        if (currentScroll < 50) {
            setToggleHeader(false);
        } else {
            setToggleHeader(true);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);


    return (
        <div className="homepage-container">
            {toggleHeader && <div className="header-cover">
                <Header/>
            </div>}
            <div className="homepage">
                <div className="landingpage">
                    {!toggleHeader && <div className="homepage-header">
                        <div className="logo-app-name">
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
                        
                        <nav className='nav-links'>
                            <a href=""><span className="ourshop">Our Shop</span></a>

                            <a href=""><span className="services">Services</span></a>

                            <a href=""><span className="booking">Booking</span></a>

                            <a href=""><span className="contact">Contact</span></a>

                            <a href=""><span className="about">About</span></a>
                        </nav>

                        <div className="search-cart-wishlist">
                            <div className="search-input">
                                <input type="text" placeholder="Search products..." />

                                <div className="search-icon">
                                    <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                            </div>

                            <a className='cart' href="">
                                <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>

                                <span className="cart-count">99+</span>
                            </a>

                            <a className='wishlist' href="">
                                <svg fill="currentColor" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <span className="wishlist-count">1</span>
                            </a>
                        </div>
                    </div>}
                    <video  autoPlay muted loop playsInline>
                        <source src="/public/cosmetics.mp4" type='video/mp4'/>
                    </video>

                    <div className="overlay"></div>

                    <div className="landingpage-contents">
                        <div style={{fontFamily: "caveat"}} className="slogan">
                            <div>
                                Premium Cosmetics,
                            </div>

                            <div>
                                YourBeauty, Your Goals.
                            </div>
                        </div>

                        <div className="brand-info">
                            Luxury beauty products with the quality and effectiveness that only comes from decades of beauty expertise. Each product enhances your natural beauty.
                        </div>

                        <div className="landingpage-btns">
                            <button>
                                SHOP COLLECTIONS
                            </button>
                            
                            <button>BOOK NOW</button>
                        </div>
                    </div>
                </div>

                <div className="book-beauty-consultation">
                    <div style={{width: '100%'}}>
                        <div className="book-icon">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"></path></svg>
                        </div>

                        <div className='head-txt' style={{color: '#C4006C'}}>
                            <div style={{fontFamily: "caveat",}} className="head">
                                Book Beauty Consultantion
                            </div>

                            <div className="txt">
                                Schedule a personalized appointment with our beauty experts for professional consultation.
                            </div>
                        </div>
                    </div>

                    <div className='appointment'>
                            Book Appointment

                        <svg style={{marginLeft: '10px'}} fill="none" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}