import { useState } from 'react'
import '../styles/Cart.css'

export function Cart() {
    const [emptyCart, setEmptyCart] = useState<boolean>(false);

    return (
        <div className="cart-container">
            {emptyCart && <div className="empty-cart">
                <div className="top-display">
                    <div className="overlay">
                        <div style={{fontFamily: 'Caveat'}}>
                            Shopping Cart
                        </div>

                        <div className="txt">
                            Your cart is empty. Start shopping to add some amazing beauty products to your collection.
                        </div>
                    </div>
                </div>

                <div className="gist">
                    <div className="emoji">
                        💄
                    </div>

                    <div style={{fontFamily: 'Caveat'}} className="head">
                        Your cart is empty
                    </div>

                    <div className="txt">
                        Looks like you haven't added any beauty products to your cart yet. Browse our collection and find your perfect cosmetics.
                    </div>

                    <a href="/cosmetics"><div className="btn">
                        BROWSE PRODUCTS
                    </div></a>
                </div>
            </div>}

            <div className="cart">
                <div className="top-display">
                    <div className="overlay">
                        <div style={{fontFamily: 'Caveat'}}>
                            Shopping Cart
                        </div>

                        <div className="txt">
                            Your cart is empty. Start shopping to add some amazing beauty products to your collection.
                        </div>
                    </div>
                </div>

                <div className="cart-display">
                    <div className='cart-summary'>

                        {/* CART */}

                        <div className="cart-section">
                            <div className="header">
                                <div style={{fontFamily: 'Caveat'}} className="head">
                                    Cart Items (2)
                                </div>

                                <div className="clear">
                                    Clear Cart
                                </div>
                            </div>

                            <div className="item">
                                <div className="img">
                                    <img src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                                </div>

                                <div className="details">
                                    <div style={{fontFamily: 'Caveat'}} className="name-cmds">
                                        <div className="name">
                                            Luxury Lipstick Set - Nude Collection
                                        </div>

                                        <div className="cmds">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path></svg>

                                            <svg height="16" width="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        </div>
                                    </div>

                                    <div className="category">
                                        GlowGoals • Makeup • All Types
                                    </div>

                                    <div style={{fontFamily: 'Caveat'}} className="price">
                                        GHC 500
                                    </div>

                                    <div className="quantity">
                                        <div className="txt">
                                            Quantity:
                                        </div>

                                        <div className="adjustment">
                                            <div>-</div>
                                            <div id='num'>2</div>
                                            <div>+</div>
                                        </div>

                                        <div style={{fontFamily: 'Caveat'}} className="sum">
                                            GHC 1000
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="img">
                                    <img src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                                </div>

                                <div className="details">
                                    <div style={{fontFamily: 'Caveat'}} className="name-cmds">
                                        <div className="name">
                                            Luxury Lipstick Set - Nude Collection
                                        </div>

                                        <div className="cmds">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path></svg>

                                            <svg height="16" width="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        </div>
                                    </div>

                                    <div className="category">
                                        GlowGoals • Makeup • All Types
                                    </div>

                                    <div style={{fontFamily: 'Caveat'}} className="price">
                                        GHC 500
                                    </div>

                                    <div className="quantity">
                                        <div className="txt">
                                            Quantity:
                                        </div>

                                        <div className="adjustment">
                                            <div>-</div>
                                            <div id='num'>2</div>
                                            <div>+</div>
                                        </div>

                                        <div style={{fontFamily: 'Caveat'}} className="sum">
                                            GHC 1000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SAVE FOR LATER */}
                        
                        <div className="cart-section">
                            <div className="header">
                                <div style={{fontFamily: 'Caveat'}} className="head">
                                    Save for Later (2)
                                </div>

                                <div className="clear">
                                    Clear All
                                </div>
                            </div>

                            <div className="item">
                                <div className="img">
                                    <img src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                                </div>

                                <div className="details">
                                    <div style={{fontFamily: 'Caveat'}} className="name-cmds">
                                        <div className="name">
                                            Luxury Lipstick Set - Nude Collection
                                        </div>

                                        <div className="cmds">
                                            <svg height="16" width="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        </div>
                                    </div>

                                    <div className="category">
                                        GlowGoals • Makeup • All Types
                                    </div>

                                    <div style={{fontFamily: 'Caveat'}} className="price">
                                        GHC 500
                                    </div>

                                    <div className="date">
                                        Saved on 10/8/2025
                                    </div>

                                    <div className="btns">
                                        <button id='cart'>
                                            <svg fill="none" stroke="currentColor" width="16" height="16" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>

                                            Move to Cart
                                        </button>

                                        <button id='wish'>
                                            <svg fill="none" stroke="currentColor" width="16" height="16" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                            Add to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="img">
                                    <img src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                                </div>

                                <div className="details">
                                    <div style={{fontFamily: 'Caveat'}} className="name-cmds">
                                        <div className="name">
                                            Luxury Lipstick Set - Nude Collection
                                        </div>

                                        <div className="cmds">
                                            <svg height="16" width="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        </div>
                                    </div>

                                    <div className="category">
                                        GlowGoals • Makeup • All Types
                                    </div>

                                    <div style={{fontFamily: 'Caveat'}} className="price">
                                        GHC 500
                                    </div>

                                    <div className="date">
                                        Saved on 10/8/2025
                                    </div>

                                    <div className="btns">
                                        <button id='cart'>
                                            <svg fill="none" stroke="currentColor" width="16" height="16" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>

                                            Move to Cart
                                        </button>

                                        <button id='wish'>
                                            <svg fill="none" stroke="currentColor" width="16" height="16" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                            Add to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}