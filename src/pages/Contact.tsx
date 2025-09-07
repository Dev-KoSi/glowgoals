import { useState } from 'react';
import '../styles/Contact.css'

export function Contact() {
    const [subjectMenu, setSubjectMenu] = useState<boolean>(false);
    const [subjectSelected, setSubjectSelected] = useState<string>('Select a subject');
    const [subjectOption, setSubjectOption] = useState<string>('');

    return (
        <div className="contact-container">
            <div className="contact">
                <div className="top-display">
                    <div className="overlay">
                        <div style={{fontFamily: 'Caveat'}}>
                            Get in Touch
                        </div>

                        <div className="txt">
                            Have questions about our beauty products or services? Want to schedule a consultation? We'd love to hear from you and help you discover your perfect beauty routine.
                        </div>
                    </div>
                </div>

                <div className="contact-us">
                    <div className="send-msg">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            Send us a Message
                        </div>

                        <div className="txt">
                            We're here to help you with all your beauty needs. Send us a message and we'll get back to you within 24 hours.
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

                        <div className="msg-details">
                            <div className="phone input">
                                <div>
                                    Phone Number *
                                </div>

                                <input type="text" placeholder='+233 XXX XXX XXX' />
                            </div>
                            
                            <div className="subject">
                                <div>
                                    Subject *
                                </div>

                                <div className='select'>
                                    <button onClick={() => {
                                        setSubjectMenu((f) => !f);
                                    }} className='default'>
                                        {subjectSelected}
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                    </button>

                                    {subjectMenu && <div className="options">
                                        <button onClick={() => {

                                            setSubjectSelected('General Inquiry');

                                            setSubjectOption('1');

                                            setSubjectMenu((f) => !f);   

                                        }} id={`first-option-${subjectOption}`}>
                                            General Inquiry
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>

                                        <button onClick={() => {

                                            setSubjectSelected('Product Infomation');

                                            setSubjectOption('2');

                                            setSubjectMenu((f) => !f);

                                        }} id={`second-option-${subjectOption}`}>
                                            Product Infomation
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>

                                        <button onClick={() => {

                                            setSubjectSelected('Schedule Consultation');

                                            setSubjectOption('3');

                                            setSubjectMenu((f) => !f);

                                        }} id={`third-option-${subjectOption}`}>
                                            Schedule Consultation
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>

                                        <button onClick={() => {

                                            setSubjectSelected('Beauty Services');

                                            setSubjectOption('4');

                                            setSubjectMenu((f) => !f);

                                        }} id={`fourth-option-${subjectOption}`}>
                                            Beauty Services
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>

                                        <button onClick={() => {

                                            setSubjectSelected('Order Status');

                                            setSubjectOption('5');

                                            setSubjectMenu((f) => !f);

                                        }} id={`fifth-option-${subjectOption}`}>
                                            Order Status
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>

                                        <button onClick={() => {

                                            setSubjectSelected('Feedback');

                                            setSubjectOption('6');

                                            setSubjectMenu((f) => !f);

                                        }} id={`sixth-option-${subjectOption}`}>
                                            Feedback
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className="msg">
                            <div>
                                Message *
                            </div>

                            <textarea placeholder='Tell us about your beauty concerns, product questions, or how we can help you...'></textarea>
                        </div>

                        <div className="btn">
                            <button>
                                Send Message
                            </button>
                        </div>
                    </div>

                    <div className="contact-handles">
                        <div className="contact-info">
                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Contact Information
                            </div>

                            <div className="info">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>

                                <div>
                                    <h4>
                                        Email Us
                                    </h4>

                                    <div>
                                        contact@glowgoals.com
                                    </div>

                                    <div>
                                        We typically respond within 24 hours
                                    </div>
                                </div>
                            </div>

                            <div className="info">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path></svg>

                                <div>
                                    <h4>
                                        Call Us
                                    </h4>

                                    <div>
                                        +233 XXX XXX XXX
                                    </div>

                                    <div>
                                        Available during business hours
                                    </div>
                                </div>
                            </div>

                            <div className="info">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg>

                                <div>
                                    <h4>
                                        Business Hours
                                    </h4>

                                    <div>
                                        Monday - Saturday: 9:00 AM - 6:00 PM
                                    </div>

                                    <div>
                                        Sunday: Closed
                                    </div>
                                </div>
                            </div>

                            <div className="info">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M854.6 289.1a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"></path></svg>

                                <div>
                                    <h4>
                                        Visit Us
                                    </h4>

                                    <div>
                                        Tema - Accra, Ghana
                                    </div>

                                    <div>
                                        Free parking available
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="handles">
                            <div style={{fontFamily: 'Caveat'}} className="head">
                                Follow Us
                            </div>

                            <div className="txt">
                                Stay updated with our latest beauty tips, product launches, and special offers.
                            </div>

                            <div className="icons">
                                <a href="">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg>
                                </a>

                                <a href="">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path></svg>
                                </a>

                                <a href="">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="suggestion">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            Ready to Transform Your Beauty?
                        </div>

                        <div className="txt">
                            Book a consultation with our beauty experts and discover your perfect beauty routine.
                        </div>

                        <div className="btns">
                            <button>
                                Book Consultation
                            </button>

                            <button>
                                View Services
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}