'use client'

import React, { createContext, useContext, useState } from 'react'
import { listOfRefs } from '../../constants/index'
import Image from 'next/image'
// import LinkNav from '../common/LinkNav/LinkNav'
import './Navbar.css'
import 'animate.css';

// //crear un contexto para el nav 
// export const NavContext = createContext()

// //que el contexto creado tenga como estado el mnav y el setMNav
// export const NavProvider = ({ children }) => {
//   const [mnav, setMNav] = useState(false)
//   return (
//     <NavContext.Provider value={{ mnav, setMNav }}>
//       {children}
//     </NavContext.Provider>
//   )
// }

const Navbar = () => {
  const [mnav,setMNav] = useState(false)
  return (
  <header id="nav">
    <nav>
      <a href={'/'} className='logo_container'>
        <h1 className='logo_font'>Diego.</h1>
      </a>
      <ul className={`list_refs`}>
        {listOfRefs.map((item) => (
          <li className='li_refs' key={item.name}>
            <a href={item.ref} className='refs'> {item.name}</a>
          </li>
        ))}

        <li
          className='li_refs'
        >
          <a href={`#contact`} className="refs">
            Contact
          </a>
        </li>

      </ul>

      {
        mnav ? (
          <button className="" style={{ zIndex: 1000 }}>
            <Image
              src='/plus.svg'
              alt="menu"
              width={40}
              height={40}
              className="cursor-pointer rotate-[45deg] duration-500"
              onClick={() => {setMNav(!mnav); console.log(mnav)}}
            />
          </button>
        ) : (
        <button className="" style={{ zIndex: 1000 }}>
            <Image
              src='/bx-menu.svg'
              alt="menu"
              width={40}
              height={40}
              className="cursor-pointer z-[9999]"
              onClick={() => {setMNav(!mnav); console.log(mnav)}}
            />
          </button>
        )
      }
    
      {
        mnav && (
          <div className={`absolute w-[100%] bg-[#13151a] flex justify-center items-center h-[1540px] animate__animated animate__slideInRight`}>
            <ul className='w-full relative top-[20rem]'>
              {listOfRefs.map((item) => (
                <li className='text-center list-none text-[3rem] py-5 active:w-full active:bg-[#ffffff40] duration-[100ms] active:h-full' key={item.name}>
                  <a href={item.ref} className='refs' onClick={() => { setMNav(false) }}> {item.name}</a>
                </li>
              ))}

              <li
                className='text-center list-none text-[3rem] py-3 active:w-full active:bg-[#ffffff40] duration-[100ms] active:h-full'
              >
                <a href={`#contact`} className="refs" onClick={() => { setMNav(false) }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )
      }
    </nav>
  </header>
  )
}

export default Navbar