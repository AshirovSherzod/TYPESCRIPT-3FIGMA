import React from 'react'

import './findjob.scss'
import img from '../../assets/findjob-img.png'

const FindJob = () => {
    return (
        <section className='findjob'>
            <div className="findjob__wrapper container">
                <div className="findjob__title">
                    <h1>Find a job that you love</h1>
                    <button>See All 2359 Jobs</button>
                </div>
                <div className="findjob__cards">
                    <div className="findjob__card">
                        <div className="findjob__card-top">
                            <div className="findjob__card-top__p">
                                <p>South Korea</p>
                                <p>Full - time</p>
                            </div>
                            <div className="findjob__card-title">
                                <h3>Senior UX Designer at Cravers Tech.</h3>
                            </div>
                        </div>
                        <div className="findjob__card-bottom">
                            <img src={img} alt="" />
                            <p>Cravers Tech</p>
                        </div>
                    </div>
                    <div className="findjob__card">
                        <div className="findjob__card-top">
                            <div className="findjob__card-top__p">
                                <p>South Korea</p>
                                <p>Full - time</p>
                            </div>
                            <div className="findjob__card-title">
                                <h3>Senior UX Designer at Cravers Tech.</h3>
                            </div>
                        </div>
                        <div className="findjob__card-bottom">
                            <img src={img} alt="" />
                            <p>Cravers Tech</p>
                        </div>
                    </div>
                    <div className="findjob__card">
                        <div className="findjob__card-top">
                            <div className="findjob__card-top__p">
                                <p>South Korea</p>
                                <p>Full - time</p>
                            </div>
                            <div className="findjob__card-title">
                                <h3>Senior UX Designer at Cravers Tech.</h3>
                            </div>
                        </div>
                        <div className="findjob__card-bottom">
                            <img src={img} alt="" />
                            <p>Cravers Tech</p>
                        </div>
                    </div>
                    <div className="findjob__card">
                        <div className="findjob__card-top">
                            <div className="findjob__card-top__p">
                                <p>South Korea</p>
                                <p>Full - time</p>
                            </div>
                            <div className="findjob__card-title">
                                <h3>Senior UX Designer at Cravers Tech.</h3>
                            </div>
                        </div>
                        <div className="findjob__card-bottom">
                            <img src={img} alt="" />
                            <p>Cravers Tech</p>
                        </div>
                    </div>
                    <div className="findjob__card">
                        <div className="findjob__card-top">
                            <div className="findjob__card-top__p">
                                <p>South Korea</p>
                                <p>Full - time</p>
                            </div>
                            <div className="findjob__card-title">
                                <h3>Senior UX Designer at Cravers Tech.</h3>
                            </div>
                        </div>
                        <div className="findjob__card-bottom">
                            <img src={img} alt="" />
                            <p>Cravers Tech</p>
                        </div>
                    </div>
                    <div className="findjob__card">
                        <div className="findjob__card-top">
                            <div className="findjob__card-top__p">
                                <p>South Korea</p>
                                <p>Full - time</p>
                            </div>
                            <div className="findjob__card-title">
                                <h3>Senior UX Designer at Cravers Tech.</h3>
                            </div>
                        </div>
                        <div className="findjob__card-bottom">
                            <img src={img} alt="" />
                            <p>Cravers Tech</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindJob