'use client'

import React from 'react'
import { listOfRefs } from '../../constants/index'
// import LinkNav from '../common/LinkNav/LinkNav'
import './Navbar.css'

const Navbar = () => {
  return (
  <header id="nav">
    <nav>
      <a href={'/'} className='logo_container'>
        <h1 className='logo_font'>Diego.</h1>
      </a>
      <ul className='list_refs'>
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

       {/* <button className="">
          <Image
            src='/bx-menu.svg'
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </button> */}
    </nav>
  </header>
  )
}

export default Navbar