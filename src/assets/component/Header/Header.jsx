import React from 'react'
import './header.css'
import { FiMenu } from "react-icons/fi";
import { Link, animateScroll as scroll } from 'react-scroll';


export default function Header() {
  return (
    <header>
      <div className="left"><h2>Erdem Oztekin</h2></div>
      <div className="right">
        <ul className='navigation'>
          <li><Link
            className='navLink'
            to="home"
            smooth={true}
            offset={-100}
            duration={500}
          >Home</Link></li>
          <li><Link
            className='navLink'
            to="skills"
            smooth={true}
            offset={-260}
            duration={500}
          >Skills</Link></li>
          <li><Link
            className='navLink'
            to="projects"
            smooth={true}
            offset={-140}
            duration={500}
          >Projects</Link></li>
          <li><Link
            className='navLink'
            to="contact"
            smooth={true}
            duration={500}
          >Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}
