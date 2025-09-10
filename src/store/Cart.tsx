import '../styles/Cart.css'

export function Cart() {

    return (
        <div className="cart-container">
            {<div className="empty-cart">
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
        </div>
    )
}