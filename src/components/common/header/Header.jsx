import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
        <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Գլխավոր</Link>
            </li>
            <li>
              <Link to='/courses'>Բոլոր կորսերը</Link>
            </li>
            <li>
              <Link to='/about'>Մեր Մասին</Link>
            </li>
            <li>
              <Link to='/team'>Թիմ</Link>
            </li>
            <li>
              <Link to='/pricing'>Գներ</Link>
            </li>
            <li>
              <Link to='/journal'>կատալոգ</Link>
            </li>
            <li>
              <Link to='/contact'>Կապ մեզ հետ</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
