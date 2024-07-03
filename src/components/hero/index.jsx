import React from 'react'

import './hero.scss'

const Hero = () => {
  return (
    <section className='hero container'>
      <div className="hero__title">
        <h1>Join the most <br /> popular tech <br /> companies.</h1>
        <p>We’ve helped over 2,500 job seekers to get <br /> into the most popular tech teams.</p>
      </div>
      <form action="">
        <input type="text" name="" id="" placeholder='Try “Software Developer”'/>
        <button>Search Job</button>
      </form>
    </section>
  )
}

export default Hero