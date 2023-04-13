import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/i-talent' className='navbar-logo'>
            Portfolio I-Talent
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/overmij' className='nav-links' onClick={closeMobileMenu}>
                Over mij
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/overzicht ' className='nav-links' onClick={closeMobileMenu}>
                Overzicht activiteiten
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/selectie' className='nav-links' onClick={closeMobileMenu}>
                Geselecteerde activiteiten
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/eindreflectie' className='nav-links' onClick={closeMobileMenu}>
                Eindreflectie
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
