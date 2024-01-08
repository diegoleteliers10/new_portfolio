'use client'

import React from 'react'
import Image from 'next/image'
import './About.css'

const About = () => {
  return (
  <div className='about_container' id="about">
    <h2 className="about_title"> About Me </h2>
    <section className="about-ta_container">
      <div className='text_container'>
            <p className='about_text'>
              Hi, I&apos;m a 23 year old full stack developer and industrial engineer from Santiago, Chile. I like to combine my two careers to create applications and web pages that are intuitive and easy to use for users. I want to bring the community closer to technology and make it more accessible and fun.
              <br/>
              <br/>
              I am a person who loves to learn new technologies and to be able to develop new things together with teams of great values, where I can bring knowledge to them and they can bring knowledge to me. My dream is to be a developer that can make the world a better and friendly place together with technology. Currently I&apos;m doing projects both in the bootcamp I&apos;m participating in, as well as personal projects, which help me to improve and affirm my knowledge in different programming languages.
            </p>
      </div>
      <div className="more_about">
        <div className="fut_container">
          <Image src="/playin-futbol.jpg" alt="me" width={250} height={180} className='me-futb_image'/>
        </div>
        <div className="flex flex-col relative top-8">
          <h3 className='text-white mb-2'>Also interested in</h3>
          <ul className='about-interest_container'>
            <li className="interest_li">
              <Image src="/controller.svg" alt="Games" width={20} height={20}/>
              <p>Games</p>
            </li>          
            <li className="interest_li">
              <Image src="/soccer-ball.svg" alt="Games" width={20} height={20}/>
              <p>Football</p>
            </li>          
            <li className="interest_li">
              <Image src="/chart.svg" alt="Games" width={20} height={20}/>
              <p>Stocks</p>
            </li>          
            <li className="interest_li">
              <Image src="/movie.svg" alt="Games" width={20} height={20}/>
              <p>Movies</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  )
}

export default About