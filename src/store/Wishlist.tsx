import '../styles/Wishlist.css'

export function Wishlist() {

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

                <div className="gist">
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
                </div>
            </div>
        </div>
    )
}