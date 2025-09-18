import { useState } from 'react';
import '../styles/Booking.css'
import { useNavigate } from 'react-router-dom';

export function Booking() {
    const [serviceMenu, setServiceMenu] = useState<boolean>(false);
    const [serviceSelected, setServiceSelected] = useState<string>('Select a service');
    const [serviceOption, setServiceOption] = useState<string>('');

    const navigate = useNavigate();

    return (
        <div className="booking-container">
            <div className="booking">
                <div className="top-display">
                    <div className="overlay">
                        <div style={{fontFamily: 'Caveat'}}>
                            Book Your Beauty Consultation
                        </div>

                        <div className="txt">
                            Schedule a personalized appointment with our beauty experts for professional consultation and tailored recommendations.
                        </div>
                    </div>
                </div>

                <div className="book">
                    <div className="schedule-session">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            Schedule Your Session
                        </div>

                        <div className="txt">
                            Choose your preferred service and time slot. Our experts will help you discover your perfect beauty routine.
                        </div>

                        <div className="name-phone">
                            <div className="name booking-details">
                                <div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>

                                    Full Name
                                </div>

                                <input type="text" placeholder='Enter your full name' />
                            </div>
                            
                            <div className="phone booking-details">
                                <div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path></svg>

                                    Phone Number
                                </div>

                                <input type="text" placeholder='Enter your phone' />
                            </div>
                        </div>
                            
                        <div className="email booking-details">
                            <div>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>

                                Email Address
                            </div>

                            <div>
                                <input type="text" placeholder='Enter your email address' />
                            </div>
                        </div>
                        
                        <div className="the-service">
                            <div className="txt">
                                Which Service do you want?
                            </div>

                            <div className='select'>
                                <button onClick={() => {
                                    setServiceMenu((f) => !f);
                                }} className='default'>
                                    {serviceSelected}
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                </button>

                                {serviceMenu && <div className="options">
                                    <button onClick={() => {

                                        setServiceSelected('Facial Treatments - 500 - GHC 1,000');

                                        setServiceOption('1');

                                        setServiceMenu((f) => !f);   

                                    }} id={`first-option-${serviceOption}`}>
                                        Facial Treatments - 500 - GHC 1,000
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>

                                    <button onClick={() => {

                                        setServiceSelected('Makeup Services - 250 - GHC 600');

                                        setServiceOption('2');

                                        setServiceMenu((f) => !f);

                                    }} id={`second-option-${serviceOption}`}>
                                        Makeup Services - 250 - GHC 600
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>

                                    <button onClick={() => {

                                        setServiceSelected('Skincare Consultation - 150 - GHC 250');

                                        setServiceOption('3');

                                        setServiceMenu((f) => !f);

                                    }} id={`third-option-${serviceOption}`}>
                                        Skincare Consultation - 150 - GHC 250
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>

                                    <button onClick={() => {

                                        setServiceSelected('Body Treatments - 500 - GHC 1,200');

                                        setServiceOption('4');

                                        setServiceMenu((f) => !f);

                                    }} id={`fourth-option-${serviceOption}`}>
                                        Body Treatments - 500 - GHC 1,200
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>

                                    <button onClick={() => {

                                        setServiceSelected('Nail Services - 100 - GHC 500');

                                        setServiceOption('5');

                                        setServiceMenu((f) => !f);

                                    }} id={`fifth-option-${serviceOption}`}>
                                        Nail Services - 100 - GHC 500
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>

                                    <button onClick={() => {

                                        setServiceSelected('Hair Treatments - 400 - GHC 1,000');

                                        setServiceOption('6');

                                        setServiceMenu((f) => !f);

                                    }} id={`sixth-option-${serviceOption}`}>
                                        Hair Treatments - 400 - GHC 1,000
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                </div>}
                            </div>
                        </div>
                        
                        <div className="date-time">
                            <div className="date booking-details">
                                <div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path></svg>

                                    Preferred Date
                                </div>

                                <input type="date" placeholder='Enter your full name' />
                            </div>
                            
                            <div className="time booking-details">
                                <div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg>

                                    Preferred Time
                                </div>

                                <input type="time" placeholder='Enter your phone' />
                            </div>
                        </div>
                            
                        <div className="special booking-details">
                            <div>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>

                                Special Requests or Concerns
                            </div>

                            <textarea placeholder='Tell us about your skin concerns, makeup preferences, or any specific questions...' />
                        </div>

                        <div className="btn">
                            <button>
                                Book Your Consultation
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="why">
                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Why Choose GlowGoals?
                            </div>

                            <div className="point">
                                <div>

                                </div>

                                <div>
                                    Expert beauty consultants with 10+ years experience
                                </div>
                            </div>

                            <div className="point">
                                <div>

                                </div>

                                <div>
                                    Personalized recommendations for your unique needs
                                </div>
                            </div>

                            <div className="point">
                                <div>

                                </div>

                                <div>
                                    Premium product selection from top beauty brands
                                </div>
                            </div>

                            <div className="point">
                                <div>

                                </div>

                                <div>
                                    Follow-up support and ongoing beauty guidance
                                </div>
                            </div>
                        </div>

                        <div className="get-in-touch">
                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Get in Touch
                            </div>

                            <div className="info">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path></svg>

                                +233 XXX XXX XXX
                            </div>

                            <div className="info">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>

                                consultation@glowgoals.com
                            </div>

                            <div className="info">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg>

                                Mon - Sat: 9:00AM - 6:00PM
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="track">
                    <div style={{fontFamily: 'Caveat'}} className="head">
                        Track Your Appointments
                    </div>

                    <div className="txt">
                        View all your booking history and keep track of your upcoming appointments.
                    </div>

                    <div className="btns">
                        <button onClick={() => navigate('/my-booking')}>
                            View My Bookings
                        </button>
                    </div>
                </div>

                <div className="suggestion">
                    <div style={{fontFamily: 'Caveat'}} className="head">
                        Ready to Shop Our Products?
                    </div>

                    <div className="txt">
                        While you wait for your consultation, explore our premium collection of skincare, makeup, and fragrance products.
                    </div>

                    <div className="btns">
                        <button>
                            Shop Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}