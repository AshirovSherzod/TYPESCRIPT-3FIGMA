import React, { useState } from 'react'

import img from '../../../assets/logo.svg'
import './header.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'

const Header = () => {
    const [show, setShow] = useState(false)

    return (
        <header className='container'>
            <nav className='nav'>
                <div className={`nav__left ${show ? "nav__show" : ""}`}>
                    
                    <button onClick={()=> setShow(false)}><IoClose /></button>
                    <ul>
                        <li><a href="#">Demos</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="nav__middle">
                    <img src={img} alt="" />
                </div>
                <div className="nav__right">
                    <p>+  Submit New Job</p>
                    <button onClick={()=> setShow(true)}><RxHamburgerMenu /></button>
                </div>
            </nav>
            {
                show ? <div onClick={()=> setShow(false)} className="overlay"></div> : <></>
            }
            
        </header>
    )
}

export default Header