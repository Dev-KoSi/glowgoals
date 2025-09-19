import '../styles/ViewService.css'

export function ViewService() {

    return (
        <div className="viewservice-container">
            <div className="viewservice">
                <div className="the-service">
                    <img src="/skin-treatment.webp" />

                    <div className="contents">
                        <div className="time-price">
                            <div className="time">
                                60 MINS
                            </div>

                            <div className="price">
                                GHC 600
                            </div>
                        </div>

                        <div style={{fontFamily: 'Caveat'}} className="name">
                            Deep Tissue Massage
                        </div>

                        <div className="description">
                            Therapeutic massage to relieve muscle tension and promote relaxation
                        </div>

                        <div className="btns">
                            <button>
                                Book Appointment Now
                            </button>

                            <button>
                                Back to Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}