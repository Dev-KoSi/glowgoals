import '../styles/About.css'

export function About() {

    return (
        <div className="about-container">
            <div className="about">
                <div className="top-display">
                    <div className="overlay">
                        <div style={{fontFamily: 'Caveat'}}>
                            About Beauty & Glow
                        </div>

                        <div className="txt">
                            For over a decade, we've been passionate about enhancing natural beauty and boosting confidence. Our story is one of dedication, expertise, and an unwavering commitment to helping you look and feel your best.
                        </div>
                    </div>
                </div>

                <div className="our-story">
                    <div className="story">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            Our Story
                        </div>

                        <div className="txt">
                            Founded in 2012 by Sarah Johnson, a passionate beauty therapist and skincare expert, Beauty & Glow began as a small beauty salon in downtown New York. What started as a place to provide basic beauty treatments quickly grew into something much bigger.

                            <p />

                            Sarah's philosophy was simple: every person deserves to feel beautiful and confident in their own skin. This belief drove her to establish relationships with the world's finest beauty brands and to develop a team of experts who share her passion for enhancing natural beauty.

                            <p />

                            Today, Beauty & Glow stands as one of the most respected beauty and wellness centers in the country, serving clients from all walks of life, from teenagers taking their first steps into beauty to professionals seeking premium treatments.
                        </div>
                    </div>

                    <div className="pic">
                        <img style={{width: '100%'}} src="/story.webp"/>
                    </div>
                </div>
            </div>
        </div>
    )
}