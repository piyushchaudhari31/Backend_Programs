import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Nav.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsactive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const scrollPosition = scrollY + window.innerHeight / 2;

      const sections = [
        { id: 'about_page', name: 'About' },
        { id: 'offer_page', name: 'offers' },
        { id: 'Menu_page', name: 'Menu' },
        { id: 'contact_page', name: 'Contact' }
      ];

      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setIsactive(section.name);
            return;
          }
        }
      }

      if (scrollY < 200) {
        setIsactive('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav ${scrolled ? 'fixed-nav' : ''}`}>
      <ul>
        <li>
          <Link className={`name ${isActive === 'Home' ? 'active' : ''}`} to='/' onClick={() => setIsactive('Home')}>Home</Link>
        </li>
        <li>
          <a href='#about_page' className={`${isActive === 'About' ? 'active' : ''}`} onClick={() => setIsactive('About')}>About</a>
        </li>
        <li>
          <a href='#offer_page' className={`${isActive === 'offers' ? 'active' : ''}`} onClick={() => setIsactive('offers')}>Offers</a>
        </li>
        <li>
          <a href='#Menu_page'className={`${isActive === 'Menu' ? 'active' : ''}`} onClick={() => setIsactive('Menu')}>Menu</a>
        </li>
        <li>
          <a href='#contact_page' className={`${isActive === 'Contact' ? 'active' : ''}`} onClick={() => setIsactive('Contact')}>Contact</a>
        </li>
       
      </ul>
    </div>
  );
};

export default Nav;
