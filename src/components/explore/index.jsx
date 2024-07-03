import React from 'react'

import img1 from '../../assets/explore-1.png'
import img2 from '../../assets/explore-2.png'
import img3 from '../../assets/explore-3.png'
import img4 from '../../assets/explore-4.png'
import img5 from '../../assets/explore-5.png'

import image1 from '../../assets/category-1.png'
import image2 from '../../assets/category-2.png'
import image3 from '../../assets/category-3.png'
import image4 from '../../assets/category-4.png'
import image5 from '../../assets/category-5.png'
import image6 from '../../assets/category-6.png'

import './explore.scss'
const Explore = () => {
    return (
        <section className='explore'>
            <div className="explore__wrapper container">
                <div className="explore__top">
                    <p>Popular tech companies who are seeking talents in our website</p>
                    <div className="explore__top__cards">
                        <div className="explore__top__card">
                            <img src={img1} alt="" />
                        </div>
                        <div className="explore__top__card">
                            <img src={img2} alt="" />
                        </div>
                        <div className="explore__top__card">
                            <img src={img3} alt="" />
                        </div>
                        <div className="explore__top__card">
                            <img src={img4} alt="" />
                        </div>
                        <div className="explore__top__card">
                            <img src={img5} alt="" />
                        </div>
                    </div>
                </div>
                <h1>Explore by category </h1>
            </div>
            <div className="explore__cards">
                <div className="explore__card">
                    <div className="explore__card-img">
                        <img src={image1} alt="" />
                    </div>
                    <h3>Finance</h3>
                    <p>196 Jobs</p>
                </div>
                <div className="explore__card">
                    <div className="explore__card-img">
                        <img src={image2} alt="" />
                    </div>
                    <h3>Design</h3>
                    <p>237 Jobs</p>
                </div>
                <div className="explore__card">
                    <div className="explore__card-img">
                        <img src={image3} alt="" />
                    </div>
                    <h3>Marketing</h3>
                    <p>472 Jobs</p>
                </div>
                <div className="explore__card">
                    <div className="explore__card-img">
                        <img src={image4} alt="" />
                    </div>
                    <h3>Human Resource</h3>
                    <p>132 Jobs</p>
                </div>
                <div className="explore__card">
                    <div className="explore__card-img">
                        <img src={image5} alt="" />
                    </div>
                    <h3>Developer</h3>
                    <p>683 Jobs</p>
                </div>
                <div className="explore__card">
                    <div className="explore__card-img">
                        <img src={image6} alt="" />
                    </div>
                    <h3>Customer Support</h3>
                    <p>1239 Jobs</p>
                </div>
            </div>
        </section>
    )
}

export default Explore