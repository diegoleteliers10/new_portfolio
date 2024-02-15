'use client'

import React from 'react'
import Image from 'next/image'
import './Hero.css'

const Hero = () => {
  return (
  <div className='hero_container' id="home">
      <div className='hero-text_container'>
          <h3>
            Full Stack Developer
          </h3>

          <h2>
            Hi, I&apos;m Diego Letelier
          </h2>

          <p className=''>
            I am a Chilean guy looking for challenges and new experiences. I&apos;m open to work with teams and learning new technologies in my journey as a developer. 
          </p>
          <div className="social">
            <ul className='ul-social'>
              <li className="socials">
                <a href="https://github.com/diegoleteliers10" target="_blank" rel='noreferrer'>
                  <Image src='/github.svg' alt='github' width={30} height={30} className='hover:scale-125 transition duration-200 icon-social'/>
                  <span className="visually-hidden">Mi GitHub</span>
                </a>
              </li>

              <li className="socials">
                <a href="https://www.linkedin.com/in/diegoleteliers10/" target="_blank" rel='noreferrer'>
                  <Image src='/linkedin.svg' alt='linkedin' width={30} height={30} className='hover:scale-125 transition duration-200 icon-social'/>
                  <span className="visually-hidden">Mi LinkedIn</span>
                </a>
              </li>

              <li className="socials">
                <a href="mailto:diegoleteliers10@gmail.com">
                  <Image src='/email.svg' alt='email' width={30} height={30} className='hover:scale-125 transition duration-200 icon-social'/>
                  <span className="visually-hidden">Mi Email</span>
                </a>
              </li>
            </ul>
            <button className='btn' type='button'>
              <a href='CV-DiegoLetelier.pdf' download>Download CV</a>
                {/* <Image src='/arrow-down-btn.svg' alt='btn-arrow' className='btn_arrow' width="30" height="40"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" ><path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z" className='btn_arrow'></path></svg>
            </button>
          </div>

      </div>

      <div className='image_container'>
        <div className='image-profile_container'>
          <Image src="/hero.png" alt="profile" width="400" height="400"className='hero_image'/>
        </div>
      </div>
  </div>
  )
}

export default Hero