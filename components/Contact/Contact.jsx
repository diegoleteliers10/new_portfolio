'use client'

import React from 'react'
import './Contact.css'

const Contact = () => {

  const sendMail = ()=>{
  window.location.href = "mailto:diegoleteliers10@gmail.com";
  }

  return (
    <div id='contact' className='mt-[3.5rem] p-[3rem] flex flex-col justify-center items-center contact-sm'>
      <h2 className='font-semibold text-[#B5734C]'>Get In Touch</h2>
      <p className='w-[600px] text-center mt-4'>I&apos;m excited to explore opportunities in product design and collaborate with companies looking for talent. Ready to learn and grow! Want to get to know me?</p>
      <button type='button' onClick={sendMail} className='text-2xl mt-10 bg-[#363636] px-4 py-2 rounded-full hover:bg-[#B5734C] transition duration-200 hover:scale-110'>Contact Me</button>
    </div>
  )
}

export default Contact