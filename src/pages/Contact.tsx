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
                </div>
            </div>
        </div>
    )
}