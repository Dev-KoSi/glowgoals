import { useParams } from 'react-router-dom';
import '../styles/Purchase.css'
import { products } from '../types/Products';
import { useEffect } from 'react';

export function Purchase() {

    const param = useParams();
    
    let product = products.find((p) => p.id === param.id);
        
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                            <svg width="24"height="24" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15v-4h4v4H8z" clip-rule="evenodd"></path></svg>

                            Product Details
                        </div>

                        <div className="flex">
                            <div className="img">
                                <img src={`${product?.image}`}/>
                            </div>
                            
                            <div className="details">
                                <div style={{fontFamily: 'Caveat'}} className="name">
                                    {product?.name}
                                </div>

                                <div className="description">
                                    {product?.description}
                                </div>

                                <div className="category">
                                    <div className="sub">
                                        <div>
                                            <span>Brand:</span> 
                                            {product?.brand}
                                        </div>

                                        <div>
                                            <span>Skin Type:</span>{product?.skinType}
                                        </div>
                                    </div>
                                    
                                    <div className="sub">
                                        <div>
                                            <span>Category:</span> 
                                            {product?.category}
                                        </div>
                                    </div>
                                </div>

                                <div className="price">
                                    GHC {product?.price.toFixed(2)}
                                </div>

                                <div className="in-stock">
                                    {product?.stock} in stock
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="customer-info">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>

                            Customer Information
                        </div>

                        <div className="info-details">
                            <div className="first-name input">
                                <div>
                                    First Name *
                                </div>

                                <input type="text" />
                            </div>
                            
                            <div className="last-name input">
                                <div>
                                    Last Name *
                                </div>

                                <input type="text" />
                            </div>
                        </div>

                        <div className="info-details">
                            <div className="email input">
                                <div>
                                    Email *
                                </div>

                                <input type="text" />
                            </div>
                            
                            <div className="phone input">
                                <div>
                                    Phone *
                                </div>

                                <input type="text" />
                            </div>
                        </div>

                        <div className="address input">
                            <div>
                                Address *
                            </div>

                            <input type="text" />
                        </div>

                        <div className="geo input">
                            <div className="city">
                                <div>
                                    City *
                                </div>

                                <input type="text" />
                            </div>

                            <div className="state">
                                <div>
                                    State *
                                </div>

                                <input type="text" />
                            </div>

                            <div className="zip">
                                <div>
                                    ZIP Code *
                                </div>

                                <input type="text" />
                            </div>
                        </div>

                        <div className="country input">
                            <div>
                                Country *
                            </div>

                            <input type="text" />
                        </div>

                        <div className="payment">
                            <div>
                                Payment Method *
                            </div>

                            <select name="payment" id="">
                                <option value="">Invoice</option>
                                <option value="">Bank Transfer</option>
                                <option value="">Other</option>
                            </select>
                        </div>

                        <div className="note">
                            <div>
                                Additional Notes
                            </div>

                            <textarea placeholder='Any special requests or notes...'></textarea>
                        </div>

                        <div className="order-summary">
                            <div style={{fontFamily: 'Caveat'}} className="head">
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>

                                Order Summary
                            </div>

                            <div className="sub">
                                <div className="txt">
                                    Subtotal:
                                </div>

                                <div className="amount">
                                    GHC {product?.price.toFixed(2)}
                                </div>
                            </div>

                            <div className="sub shipping">
                                <div className="txt">
                                    Shipping:
                                </div>

                                <div className="amount">
                                    GHC {(Number(product?.price)/10).toFixed(2)}
                                </div>
                            </div>

                            <div className="total">
                                <div className="txt">
                                    Total:
                                </div>

                                <div className="amount">
                                    GHC {(Number(product?.price) + (Number(product?.price)/10)).toFixed(2)}
                                </div>
                            </div>
                        </div>

                        <div className="btn">
                            <button>
                                Complete Purchase
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}