import { useNavigate } from 'react-router-dom';
import '../styles/Wishlist.css'
import { products } from '../types/Products';
import type { CartWish } from '../types/Types'

export function Wishlist({setCart, wishlist, setWishlist}: CartWish) {

    const navigate = useNavigate();

    let addPrice: any = wishlist.reduce((sum, w) => {
        const wishItem = products.find((p) => p.id === w.productId);
        return wishItem ? sum + wishItem?.price : sum
    }, 0).toFixed(2);

    return (
        <div className="wishlist-container">
            <div className="wishlist">
                <div className="top-display">
                    <div className="overlay">
                        <div style={{fontFamily: 'Caveat'}}>
                            My Wishlist
                        </div>

                        <div className="txt">
                            Your saved beauty treasures. Keep track of the products you love and want to add to your collection.
                        </div>
                    </div>
                </div>

                {wishlist.length < 1 && <div className="gist">
                    <div className="emoji">
                        💔
                    </div>

                    <div style={{fontFamily: 'Caveat'}} className="head">
                        Your wishlist is empty
                    </div>

                    <div className="txt">
                        Start building your beauty collection by browsing our premium products and adding your favorites to your wishlist.
                    </div>

                    <a href="/cosmetics"><div className="btn">
                        BROWSE PRODUCTS
                    </div></a>
                </div>}

                {wishlist.length > 0 && <div className="all">
                    
                    {<div className="header">
                        <div style={{fontFamily: 'Caveat'}}>
                            <div className="head">
                                Wishlist Summary
                            </div>

                            <div id="amount">
                                GHC {addPrice}
                            </div>
                        </div>

                        <div>
                            <div className="count">
                                {wishlist.length} products in your wishlist
                            </div>

                            <div className="txt">
                                Total value
                            </div>
                        </div>
                    </div>}

                    <div id='grid'>
                        {wishlist.map((wish) => {
                            const wishItem = products.find((p) => p.id === wish.productId);

                            return (
                                <div onClick={() => navigate(`/cosmetics/${wishItem?.id}`)} className="product">
                                    <div className="image">
                                        <span>{wishItem?.skinType}</span>

                                        <svg id='del' height="16" width="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>

                                        <img style={{width: '100%'}} src={`${wishItem?.image}`}/>
                                    </div>

                                    <div className="details">
                                        <div className="type">
                                            {wishItem?.category.toLocaleUpperCase()}
                                        </div>

                                        <div style={{fontFamily: 'Caveat'}} className="name">
                                            {wishItem?.name}
                                        </div>

                                        <div className="price">
                                            GHC {(wishItem?.price)?.toFixed(2)}
                                        </div>

                                        <div onClick={(e) => e.stopPropagation()} className="btns">

                                            {/* MOVE TO CART & REMOVE ITEM FUNC*/}
                                            
                                            <button onClick={() => {
                                                setCart(cart => {
                                                    const cartItem = cart.find((c) => c.productId === wishItem?.id);

                                                    if(cartItem) {
                                                        return cart.map((c) => c.productId === cartItem.productId ? {...c, quantity: c.quantity + 1} : c)
                                                    } else {
                                                        return [...cart, {productId: wish.productId, quantity: 1}]
                                                    }
                                                })

                                                setWishlist(wish => wish.filter((w) => w.productId !== wishItem?.id));

                                            }} className='add-to-cart'>Add to Cart</button>

                                            {/*REMOVE ITEM FUNC*/}

                                            <svg onClick={() => {
                                                setWishlist(wish => wish.filter((w) => w.productId !== wishItem?.id));

                                            }} id='wish-icon' fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                                            <svg id='hide-view' fill="none" width="24" height="24" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="btn">
                        <button onClick={() => window.location.href = '/cosmetics'}>
                            Continue Shopping
                        </button>
                    </div>
                </div>}
            </div>
        </div>
    )
}