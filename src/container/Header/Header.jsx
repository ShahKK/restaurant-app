import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Fine Japanese fare for discerning palates</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Experience the heights of Japanese culinary arts in an elegant and refined atmosphere at our fine dining restaurant.</p>

      {/* <button type="button" className="custom__button">Explore Menu</button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
