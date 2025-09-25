import '../styles/Footer.css'

export function Footer() {

    return (
        <div className="footer-container">
            <div className="footer">
                <div style={{borderBottom: '1px solid lightgray'}} className='grid'>
                    <div className="about-info">
                        <div className="logo-app-name">
                            <div className="logo">
                                <svg fill="currentColor" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"></path></svg>
                            </div>

                            <div className="app-name">
                                <div style={{fontFamily: "caveat"}}>
                                    GlowGoals
                                </div>

                                <div>
                                    Premium Cosmetics
                                </div>
                            </div>
                        </div>

                        <div className="info">
                            Since 2008, we've been curating the finest collection of luxury cosmetics and beauty products. Our passion for quality and beauty drives everything we do.
                        </div>

                        <div style={{display: 'flex'}} className="email">
                            <svg fill="none" width="20" height="20" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>

                            contact@glowgoals.com
                        </div>
                    </div>

                    <div className="quick-links">
                        <h3 className="txt" style={{fontFamily: 'Caveat'}}>
                            QUICK LINKS
                        </h3>

                        <a href="">Shop Cosmetics</a>

                        <a href="">Our Serveices</a>

                        <a href="">About Us</a>

                        <a href="">Contact</a>

                        <a href="">Beauty Consultation</a>
                    </div>

                    <div className="customer-service">
                        <h3 style={{fontFamily: 'Caveat'}} className="txt">
                            CUSTOMER SERVICE
                        </h3>

                        <a href="">Skincare Guide</a>

                        <a href="">Beauty Tips</a>
                    </div>
                </div>

                <div style={{borderBottom: '1px solid lightgray'}} className="handles-updates">
                    <div className="handles">
                        <h4 style={{fontFamily: 'Caveat'}}>
                            FOLLOW US
                        </h4>

                        <div className="icons">
                            <a target="_blank">
                            <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                            </a>
                            
                            <a target="_blank">
                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                            </svg>
                            </a>
                            
                            <a target="_blank">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                                </svg>
                                </a>
                        </div>
                    </div>

                    <div className="updates">
                        <h4 style={{fontFamily: 'Caveat'}}>
                            STAY UPDATED
                        </h4>

                        <div className="input-btn">
                            <input type="text" placeholder='Enter your email' />

                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                <div className="base">
                    <div id='copy'>
                        &copy; 2025  GlowBeauty - Premium Cosmetics. All rights reserved.
                    </div>

                    <div id='links'>
                        <a href=''>Privacy Policy</a>
                        
                        <a href=''>Terms of Service</a>
                        
                        <a href=''>Sitemap</a>
                    </div>
                </div>
            </div>
        </div>
    )
}