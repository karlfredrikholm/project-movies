import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="section/intheatersnow">
        <h1 className="logo"><span>Oj</span>Vad<span style={{ color: 'lawngreen' }}>Film</span>!</h1>
      </Link>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="section/intheatersnow">In Theaters Now</NavLink>
          </li>
          <li>
            <NavLink to="section/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="section/toprated">Top Rated</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
