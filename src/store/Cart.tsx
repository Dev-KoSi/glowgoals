// import { useState } from 'react'
import '../styles/Cart.css'

export function Cart() {
    // const [emptyCart, setEmptyCart] = useState<boolean>(false);

    return (
        <div className="cart-container">
            {/* {emptyCart && <div className="empty-cart">
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
            </div>} */}

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

                        {/* PRODUCTS YOU MAY LIKE */}
                        
                        <div className="cart-section">
                            <div className="header">
                                <div style={{fontFamily: 'Caveat'}} className="head">
                                    You might also like
                                </div>
                            </div>

                            <div className="products-flex" id='products-flex'>
                                <div className="product">
                                    <div className="image">
                                        <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                                    </div>

                                    <div className="details">
                                        <div className="name" id='name'>
                                            Luxury Anti-Aging Serum
                                        </div>

                                        <div style={{fontFamily: 'Caveat'}} className="price" id='price'>
                                            GHC 450.00
                                        </div>

                                        <div className="btns">
                                            <button className='add-to-cart'>Add to Cart</button>

                                            <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                            <svg fill="none" width="18" height="18" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="product">
                                    <div className="image">
                                        <img style={{width: '100%'}} src="/bottle-perfume_266732-14623.jpg" alt="" />
                                    </div>

                                    <div className="details">
                                        <div className="name" id='name'>
                                            Rose Gold Perfume
                                        </div>

                                        <div style={{fontFamily: 'Caveat'}} className="price" id='price'>
                                            GHC 750.00
                                        </div>

                                        <div className="btns">
                                            <button className='add-to-cart'>Add to Cart</button>

                                            <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 
                                                    20.364l7.682-7.682a4.5 4.5 0 
                                                    00-6.364-6.364L12 7.636l-1.318-1.318a4.5 
                                                    4.5 0 00-6.364 0z">
                                                </path>
                                            </svg>

                                            <svg fill="none" width="18" height="18" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 
                                                    016 0z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 
                                                    5c4.478 0 8.268 2.943 9.542 7-1.274 
                                                    4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="product">
                                    <div className="image">
                                        <img style={{width: '100%'}} src="/high-angle-view-pen-table_1048944-18511898.jpg" alt="" />
                                    </div>

                                    <div className="details">
                                        <div className="name" id='name'>
                                            Matte Liquid Lipstick
                                        </div>

                                        <div style={{fontFamily: 'Caveat'}} className="price" id='price'>
                                            GHC 250.00
                                        </div>

                                        <div className="btns">
                                            <button className='add-to-cart'>Add to Cart</button>

                                            <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M4.318 6.318a4.5 4.5 0 000 
                                                    6.364L12 20.364l7.682-7.682a4.5 4.5 0 
                                                    00-6.364-6.364L12 7.636l-1.318-1.318a4.5 
                                                    4.5 0 00-6.364 0z">
                                                </path>
                                            </svg>

                                            <svg fill="none" width="18" height="18" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 
                                                    016 0z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M2.458 12C3.732 7.943 7.523 5 
                                                    12 5c4.478 0 8.268 2.943 9.542 
                                                    7-1.274 4.057-5.064 7-9.542 
                                                    7-4.477 0-8.268-2.943-9.542-7z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="product">
                                    <div className="image">
                                        <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                                    </div>

                                    <div className="details">
                                        <div className="name" id='name'>
                                            Luxury Anti-Aging Serum
                                        </div>

                                        <div style={{fontFamily: 'Caveat'}} className="price" id='price'>
                                            GHC 450.00
                                        </div>

                                        <div className="btns">
                                            <button className='add-to-cart'>Add to Cart</button>

                                            <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                            <svg fill="none" width="18" height="18" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="product">
                                    <div className="image">
                                        <img style={{width: '100%'}} src="/bottle-perfume_266732-14623.jpg" alt="" />
                                    </div>

                                    <div className="details">
                                        <div className="name" id='name'>
                                            Rose Gold Perfume
                                        </div>

                                        <div style={{fontFamily: 'Caveat'}} className="price" id='price'>
                                            GHC 750.00
                                        </div>

                                        <div className="btns">
                                            <button className='add-to-cart'>Add to Cart</button>

                                            <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 
                                                    20.364l7.682-7.682a4.5 4.5 0 
                                                    00-6.364-6.364L12 7.636l-1.318-1.318a4.5 
                                                    4.5 0 00-6.364 0z">
                                                </path>
                                            </svg>

                                            <svg fill="none" width="18" height="18" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 
                                                    016 0z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 
                                                    5c4.478 0 8.268 2.943 9.542 7-1.274 
                                                    4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="product">
                                    <div className="image">
                                        <img style={{width: '100%'}} src="/high-angle-view-pen-table_1048944-18511898.jpg" alt="" />
                                    </div>

                                    <div className="details">
                                        <div className="name" id='name'>
                                            Matte Liquid Lipstick
                                        </div>

                                        <div style={{fontFamily: 'Caveat'}} className="price" id='price'>
                                            GHC 250.00
                                        </div>

                                        <div className="btns">
                                            <button className='add-to-cart'>Add to Cart</button>

                                            <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M4.318 6.318a4.5 4.5 0 000 
                                                    6.364L12 20.364l7.682-7.682a4.5 4.5 0 
                                                    00-6.364-6.364L12 7.636l-1.318-1.318a4.5 
                                                    4.5 0 00-6.364 0z">
                                                </path>
                                            </svg>

                                            <svg fill="none" width="18" height="18" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 
                                                    016 0z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M2.458 12C3.732 7.943 7.523 5 
                                                    12 5c4.478 0 8.268 2.943 9.542 
                                                    7-1.274 4.057-5.064 7-9.542 
                                                    7-4.477 0-8.268-2.943-9.542-7z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-summary">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            Order Summary
                        </div>

                        <div className="subtotal">
                            <div className="txt">
                                Subtotal (2 items)
                            </div>

                            <div className="amount">
                                GHC 1,000
                            </div>
                        </div>

                        <div className="shipping">
                            <div className="txt">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd"  height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M608 192c17.673 0 32 14.327 32 32v160h174.815a32 32 0 0 1 26.676 14.327l113.186 170.846A32 32 0 0 1 960 586.846V672c0 17.673-14.327 32-32 32h-96c0 70.692-57.308 128-128 128-70.692 0-128-57.308-128-128H384c0 70.692-57.308 128-128 128-70.692 0-128-57.308-128-128H96c-17.673 0-32-14.327-32-32V224c0-17.673 14.327-32 32-32zM256 640c-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64l1.058-.009C291.916 767.426 320 738.993 320 704c0-35.346-28.654-64-64-64m448 0c-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64l1.058-.009C739.916 767.426 768 738.993 768 704c0-35.346-28.654-64-64-64M576 256H128v384h17.124c22.131-38.259 63.498-64 110.876-64 47.378 0 88.745 25.741 110.876 64H576zm221.629 192H640v145.124C658.829 582.234 680.687 576 704 576c47.378 0 88.745 25.741 110.876 64H896v-43.516zM500 448c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H332c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12zM308 320c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12z"></path></svg>

                                Shipping
                            </div>

                            <div className="fee">
                                FREE
                            </div>
                        </div>

                        <div className="total">
                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Total
                            </div>
                            
                            <div style={{fontFamily: 'Caveat'}} className="amount">
                                GHC 1,000
                            </div>
                        </div>

                        <div className="tip">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zm-334-74c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm-138-70c38.6 0 70 31.4 70 70v70h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70zM180 482V378h298v104H180zm48 68h250v308H228V550zm568 308H546V550h250v308zm48-376H546V378h298v104z"></path></svg>

                            Free shipping on orders over GHC 1,000
                        </div>

                        <button>
                            Proceed to Checkout
                        </button>

                        <div className='dir'>
                            <a id='a' href="/cosmetics">
                                Continue Shopping
                            </a>
                        </div>

                        <div className="strategy">
                            <div className="secure">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.995 6.903a.997.997 0 0 0-.547-.797l-7.973-4a.997.997 0 0 0-.895-.002l-8.027 4c-.297.15-.502.437-.544.767-.013.097-1.145 9.741 8.541 15.008a.995.995 0 0 0 .969-.009c9.307-5.259 8.514-14.573 8.476-14.967zm-8.977 12.944c-6.86-4.01-7.14-10.352-7.063-12.205l7.071-3.523 6.998 3.511c.005 1.87-.481 8.243-7.006 12.217z"></path></svg>

                                <div>
                                    Secure Checkout
                                </div>
                            </div>

                            <div className="fast">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" fill-rule="evenodd" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M608 192c17.673 0 32 14.327 32 32v160h174.815a32 32 0 0 1 26.676 14.327l113.186 170.846A32 32 0 0 1 960 586.846V672c0 17.673-14.327 32-32 32h-96c0 70.692-57.308 128-128 128-70.692 0-128-57.308-128-128H384c0 70.692-57.308 128-128 128-70.692 0-128-57.308-128-128H96c-17.673 0-32-14.327-32-32V224c0-17.673 14.327-32 32-32zM256 640c-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64l1.058-.009C291.916 767.426 320 738.993 320 704c0-35.346-28.654-64-64-64m448 0c-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64l1.058-.009C739.916 767.426 768 738.993 768 704c0-35.346-28.654-64-64-64M576 256H128v384h17.124c22.131-38.259 63.498-64 110.876-64 47.378 0 88.745 25.741 110.876 64H576zm221.629 192H640v145.124C658.829 582.234 680.687 576 704 576c47.378 0 88.745 25.741 110.876 64H896v-43.516zM500 448c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H332c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12zM308 320c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12z"></path></svg>

                                <div>
                                    Fast Delivery
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}