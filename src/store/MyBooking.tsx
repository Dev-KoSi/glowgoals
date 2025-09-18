import { useNavigate } from 'react-router-dom'
import '../styles/MyBooking.css'
import { useEffect } from 'react';

export function MyBooking() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mybooking-container">
            <div className="mybooking">
                <div className="header">
                    <div style={{fontFamily: 'Caveat'}} className="head">
                        My Bookings
                    </div>

                    <div className="txt">
                        Keep track of all your beauty appointments
                    </div>
                </div>

                <div className="no-booking">
                    <div>
                        <svg width="50" height="50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>

                    <div style={{fontFamily: 'Caveat'}} className="head">
                        No booking yet
                    </div>

                    <div className="txt">
                        Book your first appointment to see it here
                    </div>

                    <div className="btn">
                        <button onClick={() => navigate('/booking')}>
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}