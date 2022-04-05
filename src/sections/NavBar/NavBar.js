import React from 'react'
import { useNavigate } from 'react-router-dom';

import './NavBar.styles.scss';

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className='Nav_Container'>
      <div><h1><a href='#home'>BARBER</a></h1></div>
      <div>
        <ul>
          <li><a onClick={() => navigate("/")}>Home</a></li>
          <li><a onClick={() => navigate("/about")}>About</a></li>
          <li><a onClick={() => navigate("/services")}>Services</a></li>
          <li><a onClick={() => navigate("/portfolio")}>Portfolio</a></li>
          <li><a onClick={() => navigate("/blog")}>Blog</a></li>
          <li><a onClick={() => navigate("/contact")}>Contact</a></li>
          <li><button className='buton'><a href="#about">BECOME A MEMBER</a></button></li>
        </ul>
      </div>
    </div>

  )
}

export default NavBar
