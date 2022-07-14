import React from 'react';
import people from '../../assets/people.png';
import girl from '../../assets/girlnasa.jpg';
import './header.css';

const Header = () => (
  <div className="nasa__header section__padding" id="home">
    <div className="nasa__header-content">
      <h1 className="gradient__text">The Universe is under no obligation to make sense to you.</h1>
      <p>The dawn of a new era in astronomy has begun as the world gets its first look at the full capabilities of NASA’s James Webb Space Telescope, a partnership with ESA (European Space Agency) and CSA (Canadian Space Agency). The telescope’s first full-color images and spectroscopic data were released during a televised broadcast at 10:30 a.m. EDT (14:30 UTC) on Tuesday, July 12, 2022, from NASA’s Goddard Space Flight Center in Greenbelt, Maryland. These listed targets below represent the first wave of full-color scientific images and spectra the observatory has gathered, and the official beginning of Webb’s general science operations.</p>

      <div className="nasa__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="nasa__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="nasa__header-image">
      <img src={girl} />
    </div>
  </div>
);

export default Header;
