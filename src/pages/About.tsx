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

                <div className="our-values">
                    <div style={{fontFamily: 'Caveat'}} id="head">
                        Our Values
                    </div>

                    <div className="the-values">
                        <div className="value">
                            <svg fill="none" width="30" height="30" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>

                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Quality & Expertise
                            </div>

                            <div className="txt">
                                We believe that every beauty treatment should be exceptional. We carefully select each product and service in our collection, ensuring it meets our high standards for quality, safety, and effectiveness.
                            </div>
                        </div>
                        
                        <div className="value">
                            <svg width="30" height="30"  fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Passion & Dedication
                            </div>

                            <div className="txt">
                                Our team is made up of beauty professionals who understand the importance of feeling confident and beautiful. We're passionate about helping you discover the treatments and products that enhance your natural beauty.
                            </div>
                        </div>
                        
                        <div className="value">
                            <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>

                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Community & Education
                            </div>

                            <div className="txt">
                                We're more than just a beauty salon - we're a community of beauty enthusiasts. We host workshops, consultations, and events to help clients understand their skin and beauty needs better.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}