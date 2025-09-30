import { useState } from 'react'
import '../styles/ViewProduct.css'
import { useNavigate } from 'react-router-dom';

export function ViewProduct() {

    const navigate = useNavigate();

    const [rating, setRating] = useState<number>(0);
    const [review, setReview] = useState<string>('')
    const [sendReview, setSendReview] = useState<boolean>(false);

    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="viewproduct-container">
            <div className="viewproduct">
                <div className="header">
                    <div>Home<span>/</span></div>

                    <div>Cosmetics<span>/</span></div>
                    
                    <div>Luxury Foundation - Medium Coverage</div>
                </div>

                <div className="overview">
                    <div className="pics">
                        <div className="main">
                            <span id='type'>
                                All Types
                            </span>

                            <span>
                                <svg id='wishlist-icon' fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </span>

                            <img src="/perfume-spray-bottle-isolated_93675-123583.jpg" />
                        </div>

                        <div className="subs">
                            <img src="/perfume-spray-bottle-isolated_93675-123583.jpg" />

                            <img src="/perfume-spray-bottle-isolated_93675-123583.jpg" />

                            <img src="/perfume-spray-bottle-isolated_93675-123583.jpg" />

                            <img src="/perfume-spray-bottle-isolated_93675-123583.jpg" />
                        </div>
                    </div>

                    <div className='info'>
                        <div className="type">
                            MAKEUP
                        </div>

                        <div style={{fontFamily: 'Caveat'}} className="name">
                            Luxury Foundation - Medium Coverage
                        </div>

                        <div className="by">
                            by <span>GlowGoals</span>
                        </div>

                        <div className="ratings-reviews">
                            <div className="ratings">
                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>

                            <div className="reviews">
                                4.6 (89 reviews)
                            </div>
                        </div>

                        <div className="price">
                            GHC 550
                        </div>

                        <div className="description">
                            Long-lasting foundation with SPF 30 for flawless, natural-looking coverage
                        </div>

                        <div className="details">
                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Product Details
                            </div>

                            <div className="sub">
                                <div className="brand">
                                    Brand: <span>GlowGoals</span>
                                </div>

                                <div>
                                    Category: <span>Makeup</span>
                                </div>
                            </div>

                            <div className="sub">
                                <div className="brand">
                                    Skin Type: <span>All Type</span>
                                </div>

                                <div>
                                    Stock: <span>18 units</span>
                                </div>
                            </div>
                        </div>

                        <div className="add-btn">
                            <button>
                                Add to Cart
                            </button>
                        </div>

                        <div className="btns">
                            <button id='wish'>
                                <svg fill="none" stroke="currentColor" width="16" height="16" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                Add to Wishlist
                            </button>

                            <button onClick={() => navigate('/purchase/id')} id='cart'>
                                <svg fill="none" stroke="currentColor" width="16" height="16" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>

                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="reviewboard">
                    <div style={{fontFamily: 'Caveat'}} id="head">
                        <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                        Customer Reviews
                    </div>

                    <div className="flex">
                        <div className="ratings">
                            <div className="main">
                                <div className="num">
                                    4.6
                                </div>
                                
                                <div className="stars">
                                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                    <svg fill="currentColor" width="24" height="24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>

                                <div className="txt">
                                    89 reviews
                                </div>
                            </div>

                            <div className="chat">
                                <div className="head">
                                    Rating Distribution
                                </div>

                                <div className="sub">
                                    <span id='nth'>
                                        5
                                    </span>

                                    <svg fill="currentColor" width="16" height="16" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                    <span className='lenght'>

                                    </span>

                                    0
                                </div>

                                <div className="sub">
                                    <span id='nth'>
                                        4
                                    </span>

                                    <svg fill="currentColor" width="16" height="16" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                    <span className='lenght'>
                                        
                                    </span>

                                    0
                                </div>

                                <div className="sub">
                                    <span id='nth'>
                                        3
                                    </span>

                                    <svg fill="currentColor" width="16" height="16" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                    <span className='lenght'>
                                        
                                    </span>

                                    0
                                </div>

                                <div className="sub">
                                    <span id='nth'>
                                        2
                                    </span>

                                    <svg fill="currentColor" width="16" height="16" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                    <span className='lenght'>
                                        
                                    </span>

                                    0
                                </div>

                                <div className="sub">
                                    <span id='nth'>
                                        1
                                    </span>

                                    <svg fill="currentColor" width="16" height="16" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                                    <span className='lenght'>
                                        
                                    </span>

                                    0
                                </div>
                            </div>
                        </div>

                        <button onClick={() => setSendReview((s) => !s)}>
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>

                            Write a Review
                        </button>
                    </div>
                </div>

                {sendReview && <div className="send-review">
                    <div style={{fontFamily: 'Caveat'}} id="head">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>

                        Share Your Experience
                    </div>

                    <div className="msg-details">
                        <div className="name input">
                            <div>
                                Full Name *
                            </div>

                            <input type="text" placeholder='Your full name' />
                        </div>
                        
                        <div className="email input">
                            <div>
                                Email Address *
                            </div>

                            <input type="text" placeholder='Your valid email address' />
                        </div>
                    </div>

                    <div className="how">
                        <div className="head">
                            How would you rate this product? *
                        </div>

                        <div className="rate">
                            <div className="stars">
                                {stars.map((star) => (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" 

                                    onClick={() => setRating(star)}

                                    fill={`${star <= rating ? '#facc15' : 'none'}`}
                                    
                                    color={`${star <= rating ? '#facc15' : 'none'}`}
                                    
                                    viewBox="0 0 24 24"stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                ))}
                            </div>
                            
                            {
                                rating == 1 ? 'Poor' :
                                rating == 2 ? 'Fair' :
                                rating == 3 ? 'Good' :
                                rating == 4 ? 'Very Good' :
                                rating == 5 ? 'Excellent' : ''
                            }
                        </div>
                    </div>

                    <div className="msg">
                        <div>
                            Your Review (Optional)
                        </div>

                        <textarea value={review} onChange={(e) => {
                            setReview(e.target.value)
                        }} maxLength={1000} placeholder='Tell others about your experience with this product. What did you like? What could be improved?'></textarea>
                        
                        <div style={review.length >= 1000 ? {color: '#FF008C'} : {}} className="count">
                            {review.length <= 1000 ? review.length : 1000}/1000 characters
                        </div>
                    </div>

                    <div className="btns">
                        <button>
                            Submit Review
                        </button>

                        <button onClick={() => setSendReview((s) => !s)}>
                            Cancel
                        </button>
                    </div>
                </div>}

                <div style={{fontFamily: 'Caveat'}} id="may-like">
                    You may also like
                </div>

                <div className="products-flex">

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

                            <div className="price">
                                GHC 450.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg id='hide-view' onClick={() => navigate('/cosmetics/id')} fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
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

                            <div className="price">
                                GHC 750.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg id='hide-view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
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

                            <div className="price">
                                GHC 250.00
                            </div>

                            <div className="btns">
                                <button className='add-to-cart'>Add to Cart</button>

                                <svg fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                <svg id='hide-view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}