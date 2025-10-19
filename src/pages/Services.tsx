import '../styles/Services.css'
import { services } from '../types/Services'

export function Services() {

    return (
        <div className="services-container">
            <div className="services">
                <div className="top-display">
                    <div className="overlay">
                        <div style={{fontFamily: 'Caveat'}}>Our  Services</div>

                        <div className="txt">
                            Discover our comprehensive range of beauty and wellness services, designed to enhance your natural beauty and boost your confidence.
                        </div>
                    </div>
                </div>

                <div className="grid">

                    {services?.map((s) => (
                        <div className="service">
                            <div className="img">
                                <span>
                                    {s.duration}
                                </span>

                                <img src={s.image}/>

                                <div className="txt">
                                    <div style={{fontFamily: 'Caveat'}} className="name">
                                        {s.name}
                                    </div>

                                    <div className="price">
                                        GHC {s.price.toFixed(2)} - GHC {((s.price) * 2).toFixed(2)}
                                    </div>
                                </div>
                            </div>

                            <div className="details">
                                <div className="info">
                                    {s.description}
                                </div>

                                <div className="includes">
                                    <div className='what' style={{fontFamily: 'Caveat'}}>
                                        <div>
                                            
                                        </div>

                                        What's Included
                                    </div>

                                    <div className="offer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>

                                        {s.included[0]}
                                    </div>

                                    <div className="offer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        
                                        {s.included[1]}
                                    </div>

                                    <div className="offer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        
                                        {s.included[2]}
                                    </div>
                                </div>

                                <div className="btns">
                                    <button onClick={() => window.location.href = `/services/${s.id}`}>
                                        View Details
                                    </button>

                                    <button onClick={() => window.location.href = `/booking/${s.id}`}>
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="why">
                    <div className="info">
                        <div style={{fontFamily: 'Caveat'}}>
                            Why Choose Our Service?
                        </div>

                        <p className="txt">
                            We combine expertise, premium products, and personalized care to deliver exceptional results
                        </p>
                    </div>

                    <div className="points">
                        <div className="point">
                            <svg fill="none" width="40" height="40" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Expert Professionals
                            </div>

                            <div className="txt">
                                Certified and experienced beauty specialist
                            </div>
                        </div>
                        
                        <div className="point">
                            <svg fill="none" width="40" height="40" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>

                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Premium Products
                            </div>

                            <div className="txt">
                                High-quality, safe, and effective products
                            </div>
                        </div>
                        
                        <div className="point">
                            <svg fill="none" width="40" height="40" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>

                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Personalized Care
                            </div>

                            <div className="txt">
                                Tailored treatments for your unique needs
                            </div>
                        </div>
                        
                        <div className="point">
                            <svg fill="none" width="40" height="40" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Convenient Booking
                            </div>

                            <div className="txt">
                                Easy online booking and flexible scheduling
                            </div>
                        </div>
                    </div>
                </div>

                <div className="suggestion">
                    <div style={{fontFamily: 'Caveat'}} className="head">
                        Ready to Transform Your Beauty?
                    </div>

                    <div className="txt">
                        Book your appointment today and experience the difference
                    </div>

                    <div className="btns">
                        <button onClick={() => window.location.href = '/booking'}>
                            Book Appointment
                        </button>

                        <button onClick={() => window.location.href = '/contact'}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}