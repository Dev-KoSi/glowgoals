import '../styles/ViewProduct.css'

export function ViewProduct() {

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
                                <svg id='wishlist-icon' fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
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

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}