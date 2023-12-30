import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Header() {
  const navLinks = [
    { to: 'home', offset: -100, text: 'Home' },
    { to: 'skills', offset: -260, text: 'Skills' },
    { to: 'projects', offset: -100, text: 'Projects' },
    { to: 'contact', offset: 0, text: 'Contact' },
  ];

  return (
    <header>
      <div className="left"><h2>Erdem Oztekin</h2></div>
      <div className="right">
        <ul className='navigation'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className='navLink'
                to={link.to}
                smooth={true}
                offset={link.offset}
                duration={500}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

