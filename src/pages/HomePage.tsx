import { useEffect, useState } from 'react'
import '../styles/HomePage.css'
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { products } from '../types/Products';
import type { CartWish } from '../types/Types';

export function HomePage({setCart, cart, wishlist, setWishlist}: CartWish) {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    const navigate = useNavigate();

    const [toggleHeader, setToggleHeader] = useState<string>('homepage');
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll < 50) {
                setToggleHeader('homepage');
            } else {
                setToggleHeader('header');
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="homepage-container">
            <div className="homepage">
                <div className="landingpage">
                    <div className={`${toggleHeader}-header`}>
                        <div className={`${toggleHeader}-logo-app-name`}>
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
                        
                        <nav className={`${toggleHeader}-nav-links`}>
                            <a href="/cosmetics"><span className={`${toggleHeader}-ourshop`}>Our Shop</span></a>

                            <a href="/services"><span className={`${toggleHeader}-services`}>Services</span></a>

                            <a href="/booking"><span className={`${toggleHeader}-booking`}>Booking</span></a>

                            <a href="/contact"><span className={`${toggleHeader}-contact`}>Contact</span></a>

                            <a href="/about"><span className={`${toggleHeader}-about`}>About</span></a>
                        </nav>

                        <div className={`${toggleHeader}-search-cart-wishlist`}>
                            <div className={`${toggleHeader}-search-input`}>
                                <input type="text" placeholder="Search products..." />

                                <div className={`${toggleHeader}-search-icon`}>
                                    <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                            </div>

                            <a className={`${toggleHeader}-cart`} href="/cart">
                                <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>

                                <span className={`${toggleHeader}-cart-count`}>{cart.length}</span>
                            </a>

                            <a className={`${toggleHeader}-wishlist`} href="/wishlist">
                                <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <span className={`${toggleHeader}-wishlist-count`}>{wishlist.length}</span>
                            </a>

                            <div className={`${toggleHeader}-menu`}>
                                <svg onClick={() => setToggleMenu(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                    <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <Menu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>

                    <video  autoPlay muted loop playsInline>
                        <source src="/cosmetics.mp4" type='video/mp4'/>
                    </video>

                    <div className="overlay"></div>

                    <div className="landingpage-contents">
                        <div style={{fontFamily: "caveat"}} className="slogan">
                            <div>
                                Premium Cosmetics,
                            </div>

                            <div>
                                Your Beauty, Your Goals.
                            </div>
                        </div>

                        <div className="brand-info">
                            Luxury beauty products with the quality and effectiveness that only comes from decades of beauty expertise. Each product enhances your natural beauty.
                        </div>

                        <div className="landingpage-btns">
                            <button onClick={() => {
                                navigate('/cosmetics')
                            }}>
                                SHOP COLLECTIONS
                            </button>
                            
                            <button onClick={() => {
                                navigate('/booking')
                            }}>
                                BOOK NOW
                            </button>
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

                    <div onClick={() => window.location.href = '/booking'} className='appointment'>
                        <div>Book Appointment</div>

                        <div><svg style={{marginLeft: '10px'}} fill="none" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div>
                    </div>
                </div>

                <div className="featured-products-container">
                    <div className="section-info">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            Featured Products
                        </div>

                        <div className="txt">
                            Handpicked beauty products from our finest collection. Each product is carefully selected for quality and effectiveness.
                        </div>
                    </div>

                    <div className="products-flex">

                        {products?.map((p) => (
                            <div className="product">
                                <div className="image">
                                    <span>{p.skinType}</span>

                                    <img style={{width: '100%'}} src={`${p.image}`}/>
                                </div>

                                <div className="details">
                                    <div className="type">
                                        {p.category}
                                    </div>

                                    <div style={{fontFamily: 'Caveat'}} className="name">
                                        {p.name}
                                    </div>

                                    <div className="description">
                                        {p.description}
                                    </div>

                                    <div className="price">
                                        {`GHC ${p.price}`}
                                    </div>

                                    <div className="btns">

                                        {/* ADD ITEM FUNC */}

                                        <button onClick={() => {
                                            setCart(cart => {
                                                const cartItem = cart.find((c) => c.productId === p.id)

                                                if(cartItem) {
                                                    return cart.map(c => c.productId === p.id ? {...c, quantity: c.quantity + 1} : c)
                                                } else {
                                                    return [...cart, {productId: p.id, quantity: 1}]
                                                }
                                            })
                                        }} className='add-to-cart'>Add to Cart</button>

                                        {/* ADD TO WISHLIST */}

                                        <svg onClick={() => {
                                            setWishlist(wish => {
                                                const wishItem = wish.find((w) => w.productId === p.id);

                                                if(wishItem) {
                                                    return wish
                                                }

                                                return [...wish, {productId: p.id}]
                                            })

                                            console.log(wishlist);

                                        }} fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                        <svg id='hide-view' onClick={() => navigate('/cosmetics/id')} fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="view-all-btn">
                        <a href="/cosmetics"><button>VIEW ALL PRODUCTS</button></a>
                    </div>
                </div>

                <div className="collections-container">
                    <div className="section-info">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            Explore Our Collection
                        </div>

                        <div className="txt">
                            From skincare essentials to luxury makeup, find the perfect instrument for your musical journey.
                        </div>
                    </div>

                    <div className="collection-flex">
                        <div className="collection">
                            <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg"/>

                            <svg className='path' fill="none" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>

                            <div className="txt-overlay">
                                <div style={{fontFamily: 'Caveat'}} className="name">
                                    Skin Care
                                </div>

                                <div className="txt">
                                    Premium skincare products for all skin types and concerns
                                </div>
                            </div>
                        </div>
                        <div className="collection">
                            <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg"/>

                            <svg className='path' fill="none" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>

                            <div className="txt-overlay">
                                <div style={{fontFamily: 'Caveat'}} className="name">
                                    Skin Care
                                </div>

                                <div className="txt">
                                    Premium skincare products for all skin types and concerns
                                </div>
                            </div>
                        </div>
                        <div className="collection">
                            <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg"/>

                            <svg className='path' fill="none" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>

                            <div className="txt-overlay">
                                <div style={{fontFamily: 'Caveat'}} className="name">
                                    Skin Care
                                </div>

                                <div className="txt">
                                    Premium skincare products for all skin types and concerns
                                </div>
                            </div>
                        </div>
                        <div className="collection">
                            <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg"/>

                            <svg className='path' fill="none" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>

                            <div className="txt-overlay">
                                <div style={{fontFamily: 'Caveat'}} className="name">
                                    Skin Care
                                </div>

                                <div className="txt">
                                    Premium skincare products for all skin types and concerns
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sale-section">
                        <img src="/variety-different-cosmetics-display_1161356-153701.jpg" alt="" />
                        <div className="percent-off">
                            <div style={{fontFamily: 'Caveat'}} className="num">
                                70%
                            </div>
                            OFF
                        </div>

                        <div className="txt-overlay">
                            <div className="limited-time">
                                <div className="txt">
                                    ⏰LIMITED TIME OFFER
                                </div>

                                <div className="count-down">
                                    <span id='num'>23</span>
                                    <span id='colon'>:</span>
                                    <span id='num'>59</span>
                                    <span id='colon'>:</span>
                                    <span id='num'>59</span>
                                </div>
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="mega-txt">
                                MEGA BEAUTY SALE
                            </div>

                            <div className="discount-info">
                                Up to 70% OFF on Premium Skincare, Makeup & Fragrance
                            </div>

                        <div className="discount-types">
                            <span>Free Gift with Purchase</span>
                            <span>Premium Brand Only</span>
                            <p />
                            <span>Free Shipping Over GHC 500.00</span>
                        </div>

                            <div onClick={() => window.location.href = '/cosmetics'} className='shop-now-btn'>
                                Shop Now

                            <svg style={{marginLeft: '10px'}} fill="none" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}