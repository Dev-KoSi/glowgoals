import '../styles/Shop.css'

export function Shop() {

    return (
        <div className="shop-container">
            <div className="shop">
                <div className="top-display">
                    <div className="overlay">
                        <div style={{fontFamily: 'Caveat'}}>Our Beauty Collection</div>

                        <div className="txt">
                            Discover handpicked cosmetics and skincare from the world's finest brands. From luxury makeup to effective skincare, find your perfect beauty essentials.
                        </div>
                    </div>
                </div>

                <div className="filters">
                    <div className="search-container">
                        <div className='search'>
                            <input type="text" placeholder='Search beauty products...' />

                            <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>

                    <div className="customize">
                        <div className='select'>
                            <button className='default'>
                                Featured
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>

                            <div className="options">
                                <button id='first-option-1'>
                                    Featured
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='second-option-2'>
                                    Price: Low to High
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='third-option-3'>
                                    Price: High to Low
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='fourth-option-4'>
                                    Highest Rated
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='fifth-option-5'>
                                    Name A-Z
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="grid list">
                            <button className='grid-btn'>
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>

                                Grid
                            </button>

                            <button className='list-btn'>
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>

                                List
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sort">
                    <div className="category">
                        <div className="txt">
                            Category
                        </div>

                        <div className='select'>
                            <button className='default'>
                                All
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>

                            <div className="options">
                                <button id='first-option-1'>
                                    All
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='second-option-2'>
                                    Skincare
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='third-option-3'>
                                    Makeup
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='fourth-option-4'>
                                    Fragrance
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='fifth-option-5'>
                                    Hair Care
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='sixth-option-6'>
                                    Body Care
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='seventh-option-7'>
                                    Tools & Accessories
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='eighth-option-8'>
                                    Men's Grooming
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="Brand">
                        <div className="txt">
                            Brand
                        </div>
                        
                        <div className='select'>
                            <button className='default'>
                                All
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>

                            <div className="options">
                                <button id='first-option-1'>
                                    All
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='second-option-2'>
                                    Luxe Beauty
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='third-option-3'>
                                    Glow Cosmetics
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='fourth-option-4'>
                                    Pure Skin
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='fifth-option-5'>
                                    Lash Luxe
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='sixth-option-6'>
                                    Aroma Luxe
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='seventh-option-7'>
                                    Gentlemen's Choice
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="skin-type">
                        <div className="txt">
                            Skin Type
                        </div>
                        
                        <div className='select'>
                            <button className='default'>
                                All
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>

                            <div className="options">
                                <button id='first-option-1'>
                                    All
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='second-option'>
                                    All Types
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='third-option'>
                                    Oily Skin
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='fourth-option'>
                                    Dry Skin
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='fifth-option'>
                                    Combination Skin
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='sixth-option'>
                                    Acne-Prone Skin
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='seventh-option'>
                                    Sensitive Skin
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='eighth-option'>
                                    Matured Skin
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="price-range">
                        <div className="txt">
                            Price Range
                        </div>
                        
                        <div className='select'>
                            <button className='default'>
                                All
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                            </button>

                            <div className="options">
                                <button id='first-option-1'>
                                    All
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='second-option-2'>
                                    Under GHC 100
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='third-option-3'>
                                    GHC 100 - GHC 500
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='fourth-option-4'>
                                    GHC 500 - GHC 1,000
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='fifth-option-5'>
                                    GHC 1,000 - GHC 5,000
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>

                                <button id='sixth-option-6'>
                                    Above GHC 5,000
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='grid'>
                    <div className="product">
                        <div className="image">
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                SKINCARE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Luxury Anti-Aging Serum
                            </div>

                            <div className="description">
                                Advanced anti-aging serum with retinol and hyaluronic acid
                            </div>

                            <div className="price">
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
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/bottle-perfume_266732-14623.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                FRAGRANCE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Rose Gold Perfume
                            </div>

                            <div className="description">
                                Elegant rose fragrance with lasting power
                            </div>

                            <div className="price">
                                GHC 750.00
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
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/high-angle-view-pen-table_1048944-18511898.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                MAKEUP
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Matte Liquid Lipstick
                            </div>

                            <div className="description">
                                rofessional 8-piece makeup brush set
                            </div>

                            <div className="price">
                                GHC 250.00
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
                            
                            <span>ALL TYPES</span>
                            <img style={{width: '100%'}} src="/public/perfume-bottles-isolated-against-white_127657-12258.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                FRAGRANCE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Rose Gold Perfume
                            </div>

                            <div className="description">
                                Elegant rose fragrance with lasting power
                            </div>

                            <div className="price">
                                GHC 750.00
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
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                SKINCARE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Luxury Anti-Aging Serum
                            </div>

                            <div className="description">
                                Advanced anti-aging serum with retinol and hyaluronic acid
                            </div>

                            <div className="price">
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
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/bottle-perfume_266732-14623.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                FRAGRANCE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Rose Gold Perfume
                            </div>

                            <div className="description">
                                Elegant rose fragrance with lasting power
                            </div>

                            <div className="price">
                                GHC 750.00
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
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/high-angle-view-pen-table_1048944-18511898.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                MAKEUP
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Matte Liquid Lipstick
                            </div>

                            <div className="description">
                                rofessional 8-piece makeup brush set
                            </div>

                            <div className="price">
                                GHC 250.00
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
                            
                            <span>ALL TYPES</span>
                            <img style={{width: '100%'}} src="/public/perfume-bottles-isolated-against-white_127657-12258.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                FRAGRANCE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Rose Gold Perfume
                            </div>

                            <div className="description">
                                Elegant rose fragrance with lasting power
                            </div>

                            <div className="price">
                                GHC 750.00
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
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                SKINCARE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Luxury Anti-Aging Serum
                            </div>

                            <div className="description">
                                Advanced anti-aging serum with retinol and hyaluronic acid
                            </div>

                            <div className="price">
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
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/bottle-perfume_266732-14623.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                FRAGRANCE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Rose Gold Perfume
                            </div>

                            <div className="description">
                                Elegant rose fragrance with lasting power
                            </div>

                            <div className="price">
                                GHC 750.00
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
                            <span>ALL TYPES</span>

                            <img style={{width: '100%'}} src="/high-angle-view-pen-table_1048944-18511898.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                MAKEUP
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Matte Liquid Lipstick
                            </div>

                            <div className="description">
                                rofessional 8-piece makeup brush set
                            </div>

                            <div className="price">
                                GHC 250.00
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
                            
                            <span>ALL TYPES</span>
                            <img style={{width: '100%'}} src="/public/perfume-bottles-isolated-against-white_127657-12258.jpg" alt="" />
                        </div>

                        <div className="details">
                            <div className="type">
                                FRAGRANCE
                            </div>

                            <div style={{fontFamily: 'Caveat'}} className="name">
                                Rose Gold Perfume
                            </div>

                            <div className="description">
                                Elegant rose fragrance with lasting power
                            </div>

                            <div className="price">
                                GHC 750.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg fill="none" width="18" height="18" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}