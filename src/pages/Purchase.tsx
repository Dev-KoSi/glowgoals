import '../styles/Purchase.css'

export function Purchase() {

    return (
        <div className="purchase-container">
            <div className="purchase">

                <div className="top-display">
                    <div className="overlay">
                        <div style={{fontFamily: 'Caveat'}}>Complete Your Order</div>

                        <div className="txt">
                            Secure your cosmetics today
                        </div>
                    </div>
                </div>

                <div className="purchase-grid">
                    <div className="product-details">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            <svg width="30"height="30" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15v-4h4v4H8z" clip-rule="evenodd"></path></svg>

                            Product Details
                        </div>

                        <div className="flex">
                            <div className="img">
                                <img src="/perfume-spray-bottle-isolated_93675-123583.jpg" alt="" />
                            </div>
                            
                            <div className="details">
                                <div style={{fontFamily: 'Caveat'}} className="name">
                                    Luxury Foundation - Medium Coverage
                                </div>

                                <div className="description">
                                    Long-lasting foundation with SPF 30 for flawless, natural-looking coverage
                                </div>

                                <div className="category">
                                    <div className="sub">
                                        <div>
                                            <span>Brand:</span> GlowGoals
                                        </div>

                                        <div>
                                            <span>Skin Type:</span> All Types
                                        </div>
                                    </div>
                                    
                                    <div className="sub">
                                        <div>
                                            <span>Category:</span> Makeup
                                        </div>

                                        <div>
                                            <span>SKU:</span> GB-FD001
                                        </div>
                                    </div>
                                </div>

                                <div className="price">
                                    GHC 600
                                </div>

                                <div className="in-stock">
                                    18 in stock
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}