import { useParams } from 'react-router-dom';
import '../styles/ViewService.css'
import { services } from '../types/Services';

export function ViewService() {

    const param = useParams();
    
    const service = services.find((s) => s.id === param.id);

    return (
        <div className="viewservice-container">
            <div className="viewservice">
                <div className="the-service">
                    <img src={service?.image}/>

                    <div className="contents">
                        <div className="time-price">
                            <div className="time">
                                {service?.duration}
                            </div>

                            <div className="price">
                                GHC {service?.price}
                            </div>
                        </div>

                        <div style={{fontFamily: 'Caveat'}} className="name">
                            {service?.name}
                        </div>

                        <div className="description">
                            {service?.description}
                        </div>

                        <div className="btns">
                            <button onClick={() => window.location.href = `/booking/${service?.id}`}>
                                Book Appointment Now
                            </button>

                            <button onClick={() => window.location.href = '/services'}>
                                Back to Services
                            </button>
                        </div>
                    </div>
                </div>

                <div className="about">
                    <div className="included">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                            What's Included
                        </div>

                        <div className="list">

                            {service?.included?.map((i) => (
                                <div>
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                    {i}
                            </div>
                            ))}

                        </div>
                    </div>
                    
                    <div className="benefits">
                        <div style={{fontFamily: 'Caveat'}} className="head">
                            <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>

                            Benefits
                        </div>

                        <div className="list">

                            {service?.benefits?.map((i) => (
                                <div>
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

                                    {i}
                            </div>
                            ))}
                            
                        </div>
                    </div>
                </div>

                <div className="suggestion">
                    <div style={{fontFamily: 'Caveat'}} className="head">
                        Ready to Transform Your Beauty?
                    </div>

                    <div className="txt">
                        Book your appointment now and experience the difference. Our expert professionals are ready to provide you with the best service.
                    </div>

                    <div className="btns">
                        <button onClick={() => window.location.href = `/booking/${service?.id}`}>
                            Book Appointment Now
                        </button>

                        <button onClick={() => window.location.href = '/services'}>
                            View All Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}